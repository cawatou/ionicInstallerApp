import {NgModule}           from '@angular/core';
import {TranslateModule}    from '@ngx-translate/core';
import {IonicPageModule}    from 'ionic-angular';

import {OrderMapPage}       from './order-map';
import {YaCoreModule}       from 'angular2-yandex-maps';

@NgModule({
    declarations: [
        OrderMapPage,
    ],
    imports: [
        IonicPageModule.forChild(OrderMapPage),
        TranslateModule.forChild(),
        YaCoreModule.forRoot()
    ],
    exports: [
        OrderMapPage
    ]
})
export class OrderMapPageModule {
}
