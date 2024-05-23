import { IsArray, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, MinLength } from 'class-validator';
import { CreateProductImpactDataDto } from './create-product-impact.dto';
import { CreateAttachmentDto } from './create-product-attachment.dto';


export class UpdateProductDto {
    @IsOptional()
    @IsString()
    title ?: string;
  
    @IsOptional()
    @IsString()
    description?: string;
  
    @IsOptional()
    @IsString()
    image?: string;
  
    @IsOptional()
    impactData?: CreateProductImpactDataDto;
  
    @IsOptional()
    @IsArray()
    @IsNotEmpty()
    @IsString({ each: true })
    certificates?: string[];
  
    @IsOptional()
    @IsArray()
    attachments?: CreateAttachmentDto[];
  }