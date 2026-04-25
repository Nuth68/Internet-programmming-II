import { Injectable , Inject} from '@nestjs/common';
import { NotificationsService } from 'src/notifications/notifications.service';
import { ClientProxy } from '@nestjs/microservices'

@Injectable()
export class OrdersService {
    constructor(
        @Inject('ORDERS_SERVICE') private client: ClientProxy,
        private readonly notification: NotificationsService,
    ){}
    createOrder(orderDto: any){
        this.client.emit('order_created',
            {
                order: orderDto,
                createAt: new Date().toISOString()
            }
        );
        this.notification.notify('order_create',{
            order: orderDto,
        });
        return {
            status:'Order Accepted',
            order: orderDto,
        }
    }
}
