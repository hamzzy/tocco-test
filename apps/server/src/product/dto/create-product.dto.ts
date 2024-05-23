import { IsArray, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export class CreateProductImpactDataDto {
  @IsNumber()
  totalCarbonFootprint: number;

  @IsNumber()
  reductionTargetCarbon: number;

  @IsNumber()
  reductionAchievementCarbon: number;

  @IsNumber()
  bioBasedContent: number;

  @IsNumber()
  wasteReduction: number;

  @IsNumber()
  totalWaterConsumption: number;

  @IsNumber()
  waterRecycled: number;

  @IsNumber()
  reductionAchievementWater: number;

  @IsNumber()
  mechanicalRecyclability: number;

  @IsNumber()
  chemicalRecyclability: number;

  @IsNumber()
  naturalRecyclability: number;
}

export class CreateProductDto {
  @IsString()
  title : string;

  @IsString()
  description: string;

  @IsString()
  image: string;

  @IsOptional()
  @IsObject()
  impactData?: CreateProductImpactDataDto;

  @IsOptional()
  @IsArray()
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
  @IsString({ each: true })
  certificates?: string[];

  @IsOptional()
  @IsArray()
  attachments?: CreateAttachmentDto[];
}