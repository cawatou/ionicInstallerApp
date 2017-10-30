import { Component }                              from '@angular/core';
import { IonicPage, NavController, NavParams }    from 'ionic-angular';
import { Api }                                    from "../../providers/api/api";
import { Storage }                                from '@ionic/storage';

@IonicPage()
@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {
    item:any;
    user:any;

    constructor(public navCtrl:NavController,
                public navParams:NavParams,
                public api: Api,
                private storage: Storage) {
        this.storage.get('user').then(val => {
            this.user = val
        });
    }

    ionViewDidLoad() {
    }

    openOrderList(item, user) {
        this.navCtrl.push('OrderListPage', {
            item: item,
            user: user
        });
    }

    openOrderMap(item, user) {
        this.navCtrl.push('OrderMapPage', {
            item: item,
            user: user
        });
    }
}
