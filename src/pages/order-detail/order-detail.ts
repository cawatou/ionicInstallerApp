import {Component}                                               from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController}    from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-order-detail',
    templateUrl: 'order-detail.html'
})

export class OrderDetailPage {
    item:any;

    constructor(
        public navCtrl:NavController,
        public navParams:NavParams,
        public modalCtrl: ModalController) {

        this.item = navParams.get('item');
        console.log(this.item);
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
            //user: user
        });
    }

    schedulerModal(id) {
        let modal = this.modalCtrl.create('ModalSchedulerPage', { id: id });
        modal.present();
    }
}
