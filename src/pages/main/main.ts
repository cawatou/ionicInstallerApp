import {Component}                              from '@angular/core';
import {IonicPage, NavController, NavParams}    from 'ionic-angular';

import {Items}                                  from '../../providers/providers';
import {Item}                                   from '../../models/item';

@IonicPage()
@Component({
    selector: 'page-main',
    templateUrl: 'main.html'
})
export class MainPage {
    item:any;

    constructor(public navCtrl:NavController, navParams:NavParams, items:Items) {
         //this.item = navParams.get('item');
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
}
