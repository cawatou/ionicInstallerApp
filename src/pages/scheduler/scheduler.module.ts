import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { SchedulerPage } from './scheduler';

@NgModule({
  declarations: [
    SchedulerPage,
  ],
  imports: [
    IonicPageModule.forChild(SchedulerPage),
    TranslateModule.forChild()
  ],
  exports: [
    SchedulerPage
  ]
})
export class SchedulerPageModule { }
