import { HttpStatus } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): Promise<{
        statusCode: HttpStatus;
        data: {
            id: number;
            name: string;
            description: string;
        };
        message?: undefined;
        error?: undefined;
    } | {
        statusCode: HttpStatus;
        message: string;
        error: any;
        data?: undefined;
    }>;
    findAll(): Promise<{
        statusCode: HttpStatus;
        data: ({
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
        })[];
        message?: undefined;
        error?: undefined;
    } | {
        statusCode: HttpStatus;
        message: string;
        error: any;
        data?: undefined;
    }>;
    findOne(id: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
        error?: undefined;
    } | {
        statusCode: HttpStatus;
        data: {
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
        };
        message?: undefined;
        error?: undefined;
    } | {
        statusCode: HttpStatus;
        message: string;
        error: any;
        data?: undefined;
    }>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: {
            id: number;
            name: string;
            description: string;
        };
        error?: undefined;
    } | {
        statusCode: HttpStatus;
        message: string;
        error: any;
        data?: undefined;
    }>;
    remove(id: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        error?: undefined;
    } | {
        statusCode: HttpStatus;
        message: string;
        error: any;
    }>;
}
