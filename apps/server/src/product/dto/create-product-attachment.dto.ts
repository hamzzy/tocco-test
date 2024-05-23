import { IsArray, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateAttachmentDto {
    @IsString()
    name : string;
  
    @IsString()
    attachmentId: string;
  }