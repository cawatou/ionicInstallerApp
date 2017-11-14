import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-content',
    templateUrl: 'contract.html'
})
export class ContractPage {

    constructor(public navCtrl:NavController) {
    }


    openMain() {
        this.navCtrl.push('MainPage');
    }

}

