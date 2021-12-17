import { NgModule } from '@angular/core';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  imports: [OrdersRoutingModule],
  declarations: [OrdersPageComponent],
  providers: [],
})
export class OrdersModule {}
