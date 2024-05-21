import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './dto/create-product.dto';
import { PrismaService } from '../common/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  // create a new product
  async create(createProductDto: CreateProductDto) {
    try {
      return await this.prisma.$transaction(async (prisma) => {
        const {
          name,
          description,
          launchDate,
          impactData,
          certificates,
          attachments,
        } = createProductDto;

        const product = await prisma.product.create({
          data: { name, description, launchDate },
        });

        const productId = product.id;

        if (impactData) {
          await Promise.all(
            impactData.map((impact) =>
              prisma.productImpactData.create({
                data: { ...impact, productId },
              }),
            ),
          );
        }

        if (certificates) {
          await Promise.all(
            certificates.map((certificate) =>
              prisma.certificate.create({
                data: { ...certificate, productId },
              }),
            ),
          );
        }

        if (attachments) {
          await Promise.all(
            attachments.map((attachment) =>
              prisma.attachment.create({
                data: { ...attachment, productId },
              }),
            ),
          );
        }

        return product;
      });
    } catch (error) {
      throw new InternalServerErrorException('Failed to create product');
    }
  }

  async findAll() {
    try {
      return await this.prisma.product.findMany({
        include: {
          impactData: true,
          certificates: true,
          attachments: true,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch products');
    }
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: {
        impactData: true,
        certificates: true,
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
          name,
          description,
          launchDate,
          impactData,
          certificates,
          attachments,
        } = updateProductDto;

        const product = await prisma.product.update({
          where: { id },
          data: { name, description, launchDate },
        });

        if (impactData) {
          await prisma.productImpactData.deleteMany({
            where: { productId: id },
          });
          await Promise.all(
            impactData.map((impact) =>
              prisma.productImpactData.create({
                data: { ...impact, productId: id },
              }),
            ),
          );
        }

        if (certificates) {
          await prisma.certificate.deleteMany({ where: { productId: id } });
          await Promise.all(
            certificates.map((certificate) =>
              prisma.certificate.create({
                data: { ...certificate, productId: id },
              }),
            ),
          );
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
        await prisma.certificate.deleteMany({ where: { productId: id } });
        await prisma.attachment.deleteMany({ where: { productId: id } });

        return await prisma.product.delete({ where: { id } });
      });
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete product');
    }
  }
}