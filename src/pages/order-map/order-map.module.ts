import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {IonicPageModule} from 'ionic-angular';

import {OrderMapPage} from './order-map';

@NgModule({
    declarations: [
        OrderMapPage,
    ],
    imports: [
        IonicPageModule.forChild(OrderMapPage),
        TranslateModule.forChild()
    ],
    exports: [
        OrderMapPage
    ]
})
export class OrderMapPageModule {
}
