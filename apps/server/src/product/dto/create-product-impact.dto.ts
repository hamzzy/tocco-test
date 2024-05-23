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
