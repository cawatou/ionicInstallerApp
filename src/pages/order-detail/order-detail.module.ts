import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { OrderDetailPage } from './order-detail';

@NgModule({
  declarations: [
    OrderDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    OrderDetailPage
  ]
})
export class ItemDetailPageModule { }
