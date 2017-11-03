import { Component }                   from '@angular/core';
import { IonicPage, NavController }    from 'ionic-angular';
import { Api }                         from "../../providers/api/api";
import { Storage }                     from '@ionic/storage';

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
            console.log(val);
            // this.params = ['requests', '0', this.user.Master, '1', '3'];
            // this.api.get(this.params)
            //     .subscribe(data => this.items = data.json());
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
