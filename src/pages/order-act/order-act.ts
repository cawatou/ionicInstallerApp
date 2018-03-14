import { Component }                              from '@angular/core';
import { IonicPage, NavController, NavParams }    from 'ionic-angular';
import { Api }                                    from '../../providers/api/api';
import { Storage }                                from '@ionic/storage';

@IonicPage()
@Component({
    selector: 'page-order-act',
    templateUrl: 'order-act.html'
})
export class OrderActPage {
    item: any;
    user: any;

    constructor(public navCtrl: NavController, private storage: Storage) {
        this.storage.get('item').then(data => {
            console.log(typeof data, data);
            for(let key in data) this.item[key] = data.key;
        })
    }

    openOrderList() {
        this.navCtrl.push('OrderListPage');
    }
}
