import { Component }           from '@angular/core';
import { ModalController, NavParams, NavController, IonicPage }     from 'ionic-angular';
//import { Api }                                                                      from '../../providers/api/api';
//import { Storage }                                                                  from '@ionic/storage';

@IonicPage()
@Component({
    selector: 'page-order-confirm',
    templateUrl: 'order-confirm.html'
})

export class OrderConfirmPage {
    item: any;
    user: any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private modalCtrl: ModalController) {

            //this.item = navParams.get('item');
            this.item = {
                Address: 'address'
            };
    }

    openModal() {
        let modal = this.modalCtrl.create('ModalRemainsPage');
        modal.present();
    }

    openOrderDetail(item, user) {
        this.navCtrl.push('OrderDetailPage', {
            item: item,
            user: user
        });
    }
}

