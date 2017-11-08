import { Component }                                                                from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams, ViewController }     from 'ionic-angular';
import { Api }                                                                      from '../../providers/api/api';
import { Storage }                                                                  from '@ionic/storage';

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


@Component({
    templateUrl: 'modal-remains.html'
})
export class ModalRemainsPage {
    remains: any;
    user: any;
    params: any;

    constructor(
        public navCtrl: NavController,
        public api: Api,
        public viewCtrl: ViewController,
        private storage: Storage) {

        this.storage.get('user').then(val => {
            this.user = val;
            this.params = ['remains', this.user.Master];
            this.api.get(this.params)
                .subscribe(data => this.remains = data.json());
        });
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}