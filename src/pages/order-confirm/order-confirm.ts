import { Component }                                    from '@angular/core';
import { ModalController, NavController, IonicPage }    from 'ionic-angular';
import { Storage }                                      from '@ionic/storage';
//import { Api }                                                                   from '@ionic/storage';

@IonicPage()
@Component({
    selector: 'page-order-confirm',
    templateUrl: 'order-confirm.html'
})

export class OrderConfirmPage {
    item:any = [];
    user: any;

    constructor(
        public navCtrl: NavController,
        public storage: Storage,
        private modalCtrl: ModalController) {

    }

    ionViewDidLoad() {
        this.storage.get('item').then(data => {
            for(let key in data) this.item[key] = data[key];
        });
    }

    openModal() {
        let modal = this.modalCtrl.create('ModalRemainsPage');
        modal.present();
    }

    openPage(page){
        this.navCtrl.setRoot(page);
    }
}

