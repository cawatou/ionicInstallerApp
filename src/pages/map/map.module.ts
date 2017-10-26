import {NgModule}           from '@angular/core';
import {TranslateModule}    from '@ngx-translate/core';
import {IonicPageModule}    from 'ionic-angular';
import {YaCoreModule}       from 'angular2-yandex-maps';
import {MapPage}            from './map';

@NgModule({
    declarations: [
        MapPage,
    ],
    imports: [
        IonicPageModule.forChild(MapPage),
        TranslateModule.forChild(),
        YaCoreModule.forRoot()
    ],
    exports: [
        MapPage
    ]
})
export class MapPageModule {
}
