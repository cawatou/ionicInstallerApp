import { Component }                   from '@angular/core';
import { Storage }                     from '@ionic/storage';
import { IonicPage, NavController }    from 'ionic-angular';
import { Api }                         from "../../providers/api/api";


@IonicPage()
@Component({
    selector: 'page-main',
    templateUrl: 'main.html'
})
export class MainPage {
    params: any;
    user: any;

    constructor(public navCtrl: NavController, public api: Api, private storage: Storage) {
        this.storage.get('user').then(val => {
            this.user = val;
        });
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
