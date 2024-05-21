import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../common/prisma/prisma.service';
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createProductDto: CreateProductDto): Promise<{
        id: number;
        name: string;
        description: string;
    }>;
    findAll(): Promise<({
        certificates: {
            id: number;
            productId: number;
            filePath: string;
        }[];
        impactFacts: {
            id: number;
            productId: number;
            description: string;
        }[];
        impactData: {
            id: number;
            productId: number;
            carbonFootprint: number;
            reductionTargets: number;
            reductionAchievements: number;
            waterConsumption: number;
            waterRecycled: number;
            bioBasedContent: number;
            initialWaste: number;
            finalWaste: number;
        }[];
        attachments: {
            id: number;
            productId: number;
            filePath: string;
        }[];
    } & {
        id: number;
        name: string;
        description: string;
    })[]>;
    findOne(id: number): Promise<{
        certificates: {
            id: number;
            productId: number;
            filePath: string;
        }[];
        impactFacts: {
            id: number;
            productId: number;
            description: string;
        }[];
        impactData: {
            id: number;
            productId: number;
            carbonFootprint: number;
            reductionTargets: number;
            reductionAchievements: number;
            waterConsumption: number;
            waterRecycled: number;
            bioBasedContent: number;
            initialWaste: number;
            finalWaste: number;
        }[];
        attachments: {
            id: number;
            productId: number;
            filePath: string;
        }[];
    } & {
        id: number;
        name: string;
        description: string;
    }>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<{
        id: number;
        name: string;
        description: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        description: string;
    }>;
}
