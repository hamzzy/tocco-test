import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
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
          impactData,
          certificates,
          attachments,
          impactFacts,
        } = createProductDto;

        const product = await prisma.product.create({
          data: { name, description },
        });

        const productId = product.id;

        await Promise.all([
          ...impactData.map((impact) =>
            prisma.impact.create({ data: { ...impact, productId } }),
          ),
          ...certificates.map((certificate) =>
            prisma.certificates.create({ data: { ...certificate, productId } }),
          ),
          ...attachments.map((attachment) =>
            prisma.impactAttachments.create({
              data: { ...attachment, productId },
            }),
          ),
          ...impactFacts.map((fact) =>
            prisma.impactFacts.create({ data: { ...fact, productId } }),
          ),
        ]);

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
          impactFacts: true,
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
        impactFacts: true,
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
          impactData,
          certificates,
          attachments,
          impactFacts,
        } = updateProductDto;

        const product = await prisma.product.update({
          where: { id },
          data: { name, description },
        });

        await prisma.impact.deleteMany({ where: { productId: id } });
        await prisma.certificates.deleteMany({ where: { productId: id } });
        await prisma.impactAttachments.deleteMany({ where: { productId: id } });
        await prisma.impactFacts.deleteMany({ where: { productId: id } });

        await Promise.all([
          ...impactData.map((impact) =>
            prisma.impact.create({ data: { ...impact, productId: id } }),
          ),
          ...certificates.map((certificate) =>
            prisma.certificates.create({
              data: { ...certificate, productId: id },
            }),
          ),
          ...attachments.map((attachment) =>
            prisma.impactAttachments.create({
              data: { ...attachment, productId: id },
            }),
          ),
          ...impactFacts.map((fact) =>
            prisma.impactFacts.create({ data: { ...fact, productId: id } }),
          ),
        ]);

        return product;
      });
    } catch (error) {
      throw new InternalServerErrorException('Failed to update product');
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.$transaction(async (prisma) => {
        await prisma.impact.deleteMany({ where: { productId: id } });
        await prisma.certificates.deleteMany({ where: { productId: id } });
        await prisma.impactAttachments.deleteMany({ where: { productId: id } });
        await prisma.impactFacts.deleteMany({ where: { productId: id } });

        return await prisma.product.delete({ where: { id } });
      });
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete product');
    }
  }
}
