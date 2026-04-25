import {IsString,IsOptional,Min,IsNumber} from 'class-validator';
export class UpdateOrderDto {
  @IsOptional()
  @IsString()
  productName?: string;

  @IsOptional()
  @IsNumber()
  quantity?: number;

  @IsOptional()
  @IsNumber()
  price?: number;
}