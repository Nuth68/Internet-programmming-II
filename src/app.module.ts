import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReceiptsModule } from './receipts/receipts.module';
import { ConfigModule } from '@nestjs/config'
import { NotificationsModule } from './notifications/notifications.module';
import { OrdersModule } from './orders/orders/orders.module';
import { CoreModule } from './core/core.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nuth',
      password: '123',
      database: 'tp2',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ReceiptsModule,
    NotificationsModule,
    OrdersModule,
    CoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
