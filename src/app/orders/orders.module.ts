import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from '../icons/icons.module';
import { SharedModule } from '../shared/shared.module';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';
import { FormOrderComponent } from './components/form-order/form-order.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageListOrderComponent } from './pages/page-list-order/page-list-order.component';
import { TotalPipe } from './pipes/total.pipe';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageRecapOrderComponent } from './pages/page-recap-order/page-recap-order.component';



@NgModule({
  declarations: [PageListOrderComponent, TotalPipe, FormOrderComponent, PageAddOrderComponent, PageEditOrderComponent, PageRecapOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    TemplatesModule,
    TextModule,
    ReactiveFormsModule,
    IconsModule
  ]
})
export class OrdersModule { }
