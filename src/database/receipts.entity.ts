import { Entity ,PrimaryGeneratedColumn ,Column} from "typeorm";


@Entity('receipts')
export class Receipt{
    @PrimaryGeneratedColumn('uuid')
    receiptID: string;
    
    @Column({type: 'varchar', length: 255})
    name : string;

    @Column({type: 'timestamp'})
    issuedAt: Date;


    @Column({type: 'decimal'})
    price : number;
}