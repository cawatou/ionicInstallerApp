import {Component}                              from '@angular/core';
import {IonicPage, NavController, NavParams}    from 'ionic-angular';

import {Items}                                  from '../../providers/providers';
import {Item}                                   from '../../models/item';

@IonicPage()
@Component({
    selector: 'page-order-detail',
    templateUrl: 'order-detail.html'
})
export class OrderDetailPage {
    item:any;

    constructor(public navCtrl:NavController, navParams:NavParams, items:Items) {
        //this.item = navParams.get('item') || items.defaultItem;
        this.item = navParams.get('item');
    }

    ionViewDidLoad() {
    }

    openOrderList(item:Item) {
        this.navCtrl.push('OrderListPage', {
            item: item
        });
    }

    openOrderMap(item:Item) {
        this.navCtrl.push('OrderMapPage', {
            item: item
        });
    }
}
