import { IsArray, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsDateString()
  launchDate: string;

  @IsOptional()
  @IsArray()
  impactData?: CreateProductImpactDataDto[];

  @IsOptional()
  @IsArray()
  certificates?: CreateCertificateDto[];

  @IsOptional()
  @IsArray()
  attachments?: CreateAttachmentDto[];
}

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

export class CreateCertificateDto {
  @IsString()
  certificateId: string;
}

export class CreateAttachmentDto {
  @IsString()
  name: string;

  @IsString()
  attachmentId: string;
}

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDateString()
  launchDate?: string;

  @IsOptional()
  @IsArray()
  impactData?: CreateProductImpactDataDto[];

  @IsOptional()
  @IsArray()
  certificates?: CreateCertificateDto[];

  @IsOptional()
  @IsArray()
  attachments?: CreateAttachmentDto[];
}