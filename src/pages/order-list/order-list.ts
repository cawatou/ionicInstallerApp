import {Component}                                  from '@angular/core';
import {IonicPage, ModalController, NavController}  from 'ionic-angular';

import {Item}                                       from '../../models/item';
import {Items}                                      from '../../providers/providers';

@IonicPage()
@Component({
    selector: 'page-order-list',
    templateUrl: 'order-list.html'
})
export class OrderListPage {
    currentItems:Item[];

    constructor(public navCtrl:NavController, public items:Items, public modalCtrl:ModalController) {
        this.items.query()
            .subscribe(data => this.currentItems = data.json());
    }

    ionViewDidLoad() {
    }

    openDetail(item:Item) {
        this.navCtrl.push('OrderDetailPage', {
            item: item
        });
    }
}
