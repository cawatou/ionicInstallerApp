import { Component }                                               from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams }    from 'ionic-angular';
import { ModalRemainsPage }                                        from "../modal-remains/modal-remains";


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
        public modalCtrl: ModalController,
        public navParams: NavParams) {

            //this.item = navParams.get('item');
            this.item = {
                Address: 'address'
            };
    }

    openModal() {
        let modal = this.modalCtrl.create(ModalRemainsPage);
        modal.present();
    }

    /*openOrderDetail(item, user) {
        this.navCtrl.push('OrderDetailPage', {
            item: item,
            user: user
        });
    }*/


}
