import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  productName!: string;

  @IsNumber()
  quantity!: number;

  @IsNumber()
  price!: number;
}