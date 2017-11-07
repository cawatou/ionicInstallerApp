import { NgModule }           from '@angular/core';
import { IonicPageModule }    from 'ionic-angular';
import { ModalRemainsPage }   from './modal-remains';

@NgModule({
    declarations: [
        ModalRemainsPage,
    ],
    imports: [
        IonicPageModule.forChild(ModalRemainsPage)
    ],
    exports: [
        ModalRemainsPage
    ]
})
export class ModalRemainsPageModule {
}
