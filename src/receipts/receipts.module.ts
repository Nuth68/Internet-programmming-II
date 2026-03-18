import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReceiptController } from './receipts.controller';
import { ReceiptsService } from './receipts.service';
import { Receipt } from 'src/database/receipts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Receipt])],
  controllers: [ReceiptController],
  providers: [ReceiptsService],
})
export class ReceiptsModule {}