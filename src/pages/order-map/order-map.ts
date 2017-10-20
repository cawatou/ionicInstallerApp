import {Component}                              from '@angular/core';
import {IonicPage, NavController, NavParams}    from 'ionic-angular';

import {Item}                                   from '../../models/item';

@IonicPage()
@Component({
    selector: 'page-order-map',
    templateUrl: 'order-map.html'
})
export class OrderMapPage {
    item:any;

    constructor(public navCtrl:NavController, navParams:NavParams) {
        //this.item = navParams.get('item') || items.defaultItem;
        this.item = navParams.get('item');
        this.item = navParams.get('user');
    }

    openOrderDetail(item:Item, user) {
        this.navCtrl.push('OrderDetailPage', {
            item: item,
            user: user
        });
    }
}
