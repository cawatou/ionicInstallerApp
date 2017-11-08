import { NgModule }                             from '@angular/core';
import { IonicPageModule }                      from 'ionic-angular';
import { OrderConfirmPage, ModalRemainsPage }   from './order-confirm';

@NgModule({
    declarations: [
        OrderConfirmPage,
        ModalRemainsPage
    ],
    imports: [
        IonicPageModule.forChild(OrderConfirmPage),
        IonicPageModule.forChild(ModalRemainsPage)
    ],
    exports: [
        OrderConfirmPage,
        ModalRemainsPage
    ]
})
export class OrderConfirmPageModule {
}
