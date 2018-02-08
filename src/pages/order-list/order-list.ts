import { Component }                            from '@angular/core';
import { IonicPage , LoadingController }        from 'ionic-angular';
import { NavController, ModalController }       from 'ionic-angular';
import { Api }                                  from '../../providers/api/api';
import { Storage }                              from '@ionic/storage';

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
    items:any;

    constructor(
        public navCtrl: NavController,
        public api: Api,
        private storage: Storage,
        public modalCtrl: ModalController,
        public loadingCtrl: LoadingController) {

    }

    ionViewDidLoad() {
        this.presentLoading();
        this.storage.get('user').then(user => {
            let params = ['requests', '0', user.Master, '1', '3'];
            this.api.get(params)
                .subscribe(data => this.items = data.json());
        });
    }

    openDetail(item) {
        this.storage.set('item', item);
        this.openPage('OrderDetailPage');
    }

    openPage(page){
        this.navCtrl.setRoot(page);
    }

    schedulerModal(id) {
        let modal = this.modalCtrl.create('ModalSchedulerPage', { id: id });
        modal.present();
    }

    presentLoading() {
        let loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 2000
        });
        loader.present();
    }
}
