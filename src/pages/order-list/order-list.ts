import { Component }                                    from '@angular/core';
import { IonicPage, NavController, ModalController }    from 'ionic-angular';
import { Item }                                         from '../../models/item';
import { Api }                                          from '../../providers/api/api';
import { Storage }                                      from '@ionic/storage';

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

    constructor(
        public navCtrl: NavController,
        public api: Api,
        private storage: Storage,
        public modalCtrl: ModalController) {
        
        this.storage.get('user').then(val => {
            this.user = val;
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

    openPage(page){
        this.navCtrl.setRoot(page);
    }

    schedulerModal(id) {
        console.log('id: ', id);
        let modal = this.modalCtrl.create('ModalSchedulerPage', { id: id });
        modal.present();

        /*modal.onDidDismiss(data => {
            console.log(data, 'dfdas');
        });*/
    }
}
