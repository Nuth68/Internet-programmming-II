import {IsString,IsDateString,IsOptional,Min,IsNumber} from 'class-validator';

export class updateReceiptDto{

    @IsOptional()
    @IsDateString()
    issuedAt? : string;

    @IsOptional()
    @IsString()
    name? : string;

    @IsOptional()
    @IsNumber()
    @Min(0)
    price? :number;
}

