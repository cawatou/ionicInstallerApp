import { Component }                                  from '@angular/core';
import { IonicPage, NavController, NavParams }        from 'ionic-angular';
import { Item }                                       from '../../models/item';
import { Api }                                        from '../../providers/api/api';
import { Storage }                                    from '@ionic/storage';
/**
 * params = [
 *      'method',           // request type
 *      'fulfilled',        // 1 - all , 0 - unfulfilled
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
    items:Item[];
    params: any;
    user: any;
    item: any;

    constructor(public navCtrl: NavController, public api: Api, private storage: Storage) {
        this.storage.get('user').then(val => {
            this.user = val
            this.params = ['requests', '0', this.user.Master, '1', '3'];
            this.api.get(this.params)
                .subscribe(data => this.items = data.json());
        });
    }

    openDetail(item) {
        this.navCtrl.push('OrderDetailPage', {
            item: item
        });
    }

    openMap(items) {
        this.navCtrl.push('MapPage', {
            items: items
        });
    }
}
