import {Component}                              from '@angular/core';
import {IonicPage, NavController, NavParams}    from 'ionic-angular';
import {Item}                                   from '../../models/item';

@IonicPage()
@Component({
    selector: 'page-order-detail',
    templateUrl: 'order-detail.html'
})
export class OrderDetailPage {
    item:any;
    user:any;

    constructor(public navCtrl:NavController, navParams:NavParams) {
        this.item = navParams.get('item');
        this.user = navParams.get('user');
    }

    ionViewDidLoad() {
    }

    openOrderList(item:Item, user) {
        this.navCtrl.push('OrderListPage', {
            item: item,
            user: user
        });
    }

    openOrderMap(item:Item, user) {
        this.navCtrl.push('OrderMapPage', {
            item: item,
            user: user
        });
    }
}
