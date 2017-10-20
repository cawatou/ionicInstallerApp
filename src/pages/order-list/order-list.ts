import {Component}                                  from '@angular/core';
import {IonicPage, ModalController, NavController}  from 'ionic-angular';

import {Item}                                       from '../../models/item';
import {Items}                                      from '../../providers/providers';

/**
 * params = [
 *      'fulfilled', // 1 - all , 0 - unfulfilled
 *      'master_name',
 *      'page_number',
 *      'on_page'
 * ] *
 */

@IonicPage()
@Component({
    selector: 'page-order-list',
    templateUrl: 'order-list.html'
})
export class OrderListPage {
    currentItems:Item[];
    params: any;

    constructor(public navCtrl:NavController, public items:Items, public modalCtrl:ModalController) {
        this.params = ['0', 'Фрид%20Александр', '1', '3'];
        this.items.query(this.params)
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
