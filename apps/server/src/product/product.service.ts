import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateProductDto} from './dto/create-product.dto';
import { PrismaService } from '../common/prisma/prisma.service';
import { CreateProductImpactDataDto } from './dto/create-product-impact.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  // create a new product
  
  async create(createProductDto: CreateProductDto) {
    try {
      return await this.prisma.$transaction(async (prisma) => {
        const { title, description, image, impactData, certificates, attachments } = createProductDto;
  
  
        const product = await prisma.product.create({
          data: {
            title,
            description,
            image,
            certificates: certificates || [],
          },
        });
  
        const productId = product.id;
  
        if (impactData) {
          const impactDataWithComputedFields: CreateProductImpactDataDto = {
            ...impactData,
            reductionAchievementCarbon: impactData.reductionTargetCarbon - impactData.totalCarbonFootprint,
            reductionAchievementWater: impactData.waterRecycled - impactData.totalWaterConsumption,
          };
  
  
          await prisma.productImpactData.create({ data: { ...impactDataWithComputedFields, productId } });
        }
  
        if (attachments) {
          await prisma.attachment.createMany({
            data: attachments.map((attachment) => ({ ...attachment, productId })),
          });
        }
  
        return product;
      });
    } catch (error) {
      console.error('Error creating product:', error);  // Log the error
      throw new InternalServerErrorException('Failed to create product');
    }
  }
  

// get all products
  async findAll() {
    try {
      return await this.prisma.product.findMany({
        include: {
          impactData: true,
          attachments: true,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch products');
    }
  }

  // find one product
  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: {
        impactData: true,
        attachments: true,
      },
    });

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      return await this.prisma.$transaction(async (prisma) => {
        const {
          title ,
          description,
          image,
          impactData,
          certificates,
          attachments,
        } = updateProductDto;

        const product = await prisma.product.update({
          where: { id },
          data: { 
            title , 
            description, 
            image,
            certificates: certificates || [],
          },
        });

        if (impactData) {
          await prisma.productImpactData.deleteMany({
            where: { productId: id },
          });
          const impactDataWithComputedFields = {
            ...impactData,
            reductionAchievementCarbon: impactData.reductionTargetCarbon - impactData.totalCarbonFootprint,
            reductionAchievementWater: impactData.waterRecycled - impactData.totalWaterConsumption,
          };
          await prisma.productImpactData.create({
            data: { ...impactDataWithComputedFields, productId: id },
          });
        }

        if (attachments) {
          await prisma.attachment.deleteMany({ where: { productId: id } });
          await Promise.all(
            attachments.map((attachment) =>
              prisma.attachment.create({
                data: { ...attachment, productId: id },
              }),
            ),
          );
        }

        return product;
      });
    } catch (error) {
      throw new InternalServerErrorException('Failed to update product');
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.$transaction(async (prisma) => {
        await prisma.productImpactData.deleteMany({ where: { productId: id } });
        await prisma.attachment.deleteMany({ where: { productId: id } });

        return await prisma.product.delete({ where: { id } });
      });
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete product');
    }
  }
}
