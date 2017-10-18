import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { OrderListPage } from './order-list';

@NgModule({
  declarations: [
    OrderListPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderListPage),
    TranslateModule.forChild()
  ],
  exports: [
    OrderListPage
  ]
})
export class OrderListPageModule { }
