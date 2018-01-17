import { NgModule }           from '@angular/core';
import { IonicPageModule }    from 'ionic-angular';
import { ModalSchedulerPage }   from './modal-scheduler';

@NgModule({
    declarations: [
        ModalSchedulerPage,
    ],
    imports: [
        IonicPageModule.forChild(ModalSchedulerPage)
    ],
    exports: [
        ModalSchedulerPage
    ]
})
export class ModalSchedulerPageModule {
}
