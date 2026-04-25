import { Module ,forwardRef} from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { OrdersModule } from 'src/orders/orders/orders.module';
import { CoreModule } from 'src/core/core.module';


@Module({
  imports: [CoreModule],
  providers: [NotificationsService],
  exports: [NotificationsService],
})
export class NotificationsModule {

}
