// src/product/dto/create-product.dto.ts
import {
  IsString,
  IsArray,
  ValidateNested,
  IsOptional,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';

class CreateImpactDto {
  @IsNumber()
  carbonFootprint: number;

  @IsNumber()
  reductionTargets: number;

  @IsNumber()
  reductionAchievements: number;

  @IsNumber()
  waterConsumption: number;

  @IsNumber()
  waterRecycled: number;

  @IsNumber()
  bioBasedContent: number;

  @IsOptional()
  @IsNumber()
  initialWaste?: number;

  @IsOptional()
  @IsNumber()
  finalWaste?: number;
}

class CreateCertificateDto {
  @IsString()
  filePath: string;
}

class CreateAttachmentDto {
  @IsString()
  filePath: string;
}

class CreateImpactFactDto {
  @IsString()
  description: string;
}

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateImpactDto)
  impactData: CreateImpactDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCertificateDto)
  certificates: CreateCertificateDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAttachmentDto)
  attachments: CreateAttachmentDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateImpactFactDto)
  impactFacts: CreateImpactFactDto[];
}
