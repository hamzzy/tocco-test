import { IsArray, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateProductImpactDataDto {
  @IsNumber()
  @IsNotEmpty()
  totalCarbonFootprint: number;

  @IsNumber()
  @IsNotEmpty()
  reductionTargetCarbon: number;

  @IsNumber()
  @IsNotEmpty()
  reductionAchievementCarbon: number;

  @IsNumber()
  @IsNotEmpty()
  bioBasedContent: number;

  @IsNumber()
  @IsNotEmpty()
  wasteReduction: number;

  @IsNumber()
  @IsNotEmpty()
  totalWaterConsumption: number;

  @IsNumber()
  @IsNotEmpty()
  waterRecycled: number;

  @IsNumber()
  @IsNotEmpty()
  reductionAchievementWater: number;

  @IsNumber()
  @IsNotEmpty()
  mechanicalRecyclability: number;

  @IsNumber()
  @IsNotEmpty()
  chemicalRecyclability: number;

  @IsNumber()
  @IsNotEmpty()
  naturalRecyclability: number;
}

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

export class CreateAttachmentDto {
  @IsString()
  name : string;

  @IsString()
  attachmentId: string;
}

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