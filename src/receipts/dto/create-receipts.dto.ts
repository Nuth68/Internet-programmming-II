import {IsDateString,IsNotEmpty,IsNumber,IsString,Min} from 'class-validator';

export class createReceiptDto{
    @IsDateString()
    issuedAt! :string;

    @IsString()
    @IsNotEmpty()
    name! : string;

    @IsNumber()
    @Min(0)
    price! : number;
}