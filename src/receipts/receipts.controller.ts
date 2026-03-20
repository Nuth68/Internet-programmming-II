import {Body,Controller,Delete,Get,Param,Patch,Post, UseGuards} from '@nestjs/common';
import { updateReceiptDto } from './dto/update-receipts.dts';
import { ReceiptsService } from './receipts.service';
import { createReceiptDto } from './dto/create-receipts.dto';
import { ApiKeyGuard } from 'src/common/guards/api-key.guard';

@UseGuards(ApiKeyGuard)
@Controller('receipts')
export class ReceiptController{
    constructor (private readonly receiptsService : ReceiptsService){}
    @Get()
    findAll(){
        return this.receiptsService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id:string){
        return this.receiptsService.findOne(id);
    }
    @Post()
    create(@Body() dto: createReceiptDto) {
        return this.receiptsService.create(dto);
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: updateReceiptDto){
        return this.receiptsService.update(id,dto);
    }
    @Delete(':id')
    delete(@Param('id') id:string){
        return this.receiptsService.remove(id); 
    }
    
}