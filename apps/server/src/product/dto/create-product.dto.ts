import { IsArray, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, MinLength } from 'class-validator';
import { CreateProductImpactDataDto } from './create-product-impact.dto';
import { CreateAttachmentDto } from './create-product-attachment.dto';


export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3, {
    message: 'Title is too short',
  })
  title : string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10, {
    message: 'Description is too short',
  })
  description: string;

  @IsString({
    message: 'Image can not be empty',
  })
  image: string;

  @IsOptional()
  @IsObject()
  @IsNotEmpty()
  impactData?: CreateProductImpactDataDto;

  @IsArray()
  @IsNotEmpty()
  @IsString({ each: true })
  certificates?: string[];

  @IsOptional()
  @IsArray()
  attachments?: CreateAttachmentDto[];
}


