import { Injectable ,NotFoundException } from "@nestjs/common";
import { InjectRepository} from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { createReceiptDto } from "./dto/create-receipts.dto";
import { updateReceiptDto } from "./dto/update-receipts.dts";
import { Receipt } from "src/database/receipts.entity"
import { NotificationsService } from "src/notifications/notifications.service";



@Injectable()
export class ReceiptsService{
    constructor(
        @InjectRepository(Receipt)
        private readonly receiptRepo: Repository <Receipt>,
        private readonly notifications: NotificationsService,
    ){}
    async findAll(){
        return this.receiptRepo.find( {order: {issuedAt: 'DESC'}});
    }
    async findOne(receiptID: string){
        const receipt = await this.receiptRepo.findOne({where: { receiptID }});
        if (!receipt) throw new NotFoundException('Receipt not foud');
        return receipt;
    }
    async create(dto: createReceiptDto){
        const receipt = this.receiptRepo.create({
            issuedAt: new Date(dto.issuedAt),
            name: dto.name,
            price: dto.price,
        });
       const saved = await this.receiptRepo.save(receipt);

       this.notifications.notify('receipt_created',
        {
            receiptID: saved.receiptID,
            price: saved.price,
        }
       );
       return saved;
    }
    async update(receiptID: string, dto: updateReceiptDto){
        const receipt = await this.receiptRepo.findOne({where: {receiptID}});
        if (!receipt) throw new NotFoundException('Receipt Not found');
        if (dto.issuedAt !== undefined ) receipt.issuedAt = new Date(dto.issuedAt);
        if (dto.name !==undefined) receipt.name = dto.name;
        if (dto.price !== undefined) receipt.price =  dto.price;
        return this.receiptRepo.save(receipt);
    }
    async remove(receiptID: string){
        const receipt = await this.receiptRepo.findOne({where: {receiptID}});
        if (!receipt) throw new NotFoundException('Receipt Not found');
        await this.receiptRepo.remove(receipt);
        return {delete: true, receiptID};
    }
}