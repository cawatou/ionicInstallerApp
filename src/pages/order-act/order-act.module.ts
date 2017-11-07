import { NgModule }           from '@angular/core';
import { TranslateModule }    from '@ngx-translate/core';
import { IonicPageModule }    from 'ionic-angular';
import { OrderActPage }       from './order-act';

@NgModule({
    declarations: [
        OrderActPage,
    ],
    imports: [
        IonicPageModule.forChild(OrderActPage),
        TranslateModule.forChild()
    ],
    exports: [
        OrderActPage
    ]
})
export class OrderActPageModule {
}
