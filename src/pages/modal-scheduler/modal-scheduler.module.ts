import { NgModule }           from '@angular/core';
import { IonicPageModule }    from 'ionic-angular';
import { ModalSchedulerPage } from './modal-scheduler';
import { DatePickerModule }   from 'ionic3-datepicker';

@NgModule({
    declarations: [
        ModalSchedulerPage,
    ],
    imports: [
        IonicPageModule.forChild(ModalSchedulerPage),
        DatePickerModule     
    ],
    exports: [
        ModalSchedulerPage
    ]
})
export class ModalSchedulerPageModule {
}
