"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/prisma/prisma.service");
let ProductService = class ProductService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createProductDto) {
        try {
            return await this.prisma.$transaction(async (prisma) => {
                const { name, description, impactData, certificates, attachments, impactFacts, } = createProductDto;
                const product = await prisma.product.create({
                    data: { name, description },
                });
                const productId = product.id;
                await Promise.all([
                    ...impactData.map((impact) => prisma.impact.create({ data: Object.assign(Object.assign({}, impact), { productId }) })),
                    ...certificates.map((certificate) => prisma.certificates.create({ data: Object.assign(Object.assign({}, certificate), { productId }) })),
                    ...attachments.map((attachment) => prisma.impactAttachments.create({
                        data: Object.assign(Object.assign({}, attachment), { productId }),
                    })),
                    ...impactFacts.map((fact) => prisma.impactFacts.create({ data: Object.assign(Object.assign({}, fact), { productId }) })),
                ]);
                return product;
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to create product');
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
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to fetch products');
        }
    }
    async findOne(id) {
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
            throw new common_1.NotFoundException(`Product with ID ${id} not found`);
        }
        return product;
    }
    async update(id, updateProductDto) {
        try {
            return await this.prisma.$transaction(async (prisma) => {
                const { name, description, impactData, certificates, attachments, impactFacts, } = updateProductDto;
                const product = await prisma.product.update({
                    where: { id },
                    data: { name, description },
                });
                await prisma.impact.deleteMany({ where: { productId: id } });
                await prisma.certificates.deleteMany({ where: { productId: id } });
                await prisma.impactAttachments.deleteMany({ where: { productId: id } });
                await prisma.impactFacts.deleteMany({ where: { productId: id } });
                await Promise.all([
                    ...impactData.map((impact) => prisma.impact.create({ data: Object.assign(Object.assign({}, impact), { productId: id }) })),
                    ...certificates.map((certificate) => prisma.certificates.create({
                        data: Object.assign(Object.assign({}, certificate), { productId: id }),
                    })),
                    ...attachments.map((attachment) => prisma.impactAttachments.create({
                        data: Object.assign(Object.assign({}, attachment), { productId: id }),
                    })),
                    ...impactFacts.map((fact) => prisma.impactFacts.create({ data: Object.assign(Object.assign({}, fact), { productId: id }) })),
                ]);
                return product;
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to update product');
        }
    }
    async remove(id) {
        try {
            return await this.prisma.$transaction(async (prisma) => {
                await prisma.impact.deleteMany({ where: { productId: id } });
                await prisma.certificates.deleteMany({ where: { productId: id } });
                await prisma.impactAttachments.deleteMany({ where: { productId: id } });
                await prisma.impactFacts.deleteMany({ where: { productId: id } });
                return await prisma.product.delete({ where: { id } });
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to delete product');
        }
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
//# sourceMappingURL=product.service.js.map