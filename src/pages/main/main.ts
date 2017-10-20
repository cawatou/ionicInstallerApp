import {Component}                              from '@angular/core';
import {IonicPage, NavController, NavParams}    from 'ionic-angular';

 
@IonicPage()
@Component({
    selector: 'page-main',
    templateUrl: 'main.html'
})
export class MainPage {
    item:any;

    constructor(public navCtrl:NavController, navParams:NavParams) {

    }

    openContract() {
        this.navCtrl.push('ContractPage');
    }

    openKnowledge() {
        this.navCtrl.push('KnowledgePage');
    }

    openOffer() {
        this.navCtrl.push('OfferPage');
    }

    openScheduler() {
        this.navCtrl.push('SchedulerPage');
    }

    openOrderList() {
        this.navCtrl.push('OrderListPage');
    }
}
