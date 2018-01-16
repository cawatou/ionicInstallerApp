import {Component}                  from '@angular/core';
import {IonicPage, NavController}   from 'ionic-angular';
import {Api}                        from '../../providers/api/api';

@IonicPage()
@Component({
    selector: 'page-content',
    templateUrl: 'contract.html'
})
export class ContractPage {
    params: any;
    contracts: any;

    constructor(public navCtrl:NavController, public api:Api) {
        this.params = ['StandartContracts'];
        this.api.get(this.params)
            .subscribe(data => this.contracts = data.json());
    }

    openPage(page){
        this.navCtrl.setRoot(page);
    }

}

