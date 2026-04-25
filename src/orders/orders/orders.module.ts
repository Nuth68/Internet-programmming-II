import { Module ,forwardRef} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { ClientsModule , Transport} from '@nestjs/microservices'
import { NotificationsModule } from 'src/notifications/notifications.module';

@Module({
    imports: [ClientsModule.register([
        {
        name: 'ORDERS_SERVICE',
        transport: Transport.TCP,
    }
        
        
    ]),
     forwardRef(() => NotificationsModule),
    
],
    providers: [OrdersService],
    controllers: [ OrdersController],
})
export class OrdersModule {}
