import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ContractsPage } from './contracts';

@NgModule({
  declarations: [
    ContractsPage,
  ],
  imports: [
    IonicPageModule.forChild(ContractsPage),
    TranslateModule.forChild()
  ],
  exports: [
    ContractsPage
  ]
})
export class ContractsPageModule { }
