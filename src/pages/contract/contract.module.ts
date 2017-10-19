import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ContractPage } from './contract';

@NgModule({
  declarations: [
    ContractPage,
  ],
  imports: [
    IonicPageModule.forChild(ContractPage  ),
    TranslateModule.forChild()
  ],
  exports: [
    ContractPage
  ]
})
export class ContractsPageModule { }
