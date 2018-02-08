import {Component}                                    from '@angular/core';
import {IonicPage, NavController, ModalController}    from 'ionic-angular';
import { Storage }                                    from '@ionic/storage';

@IonicPage()
@Component({
    selector: 'page-order-detail',
    templateUrl: 'order-detail.html'
})

export class OrderDetailPage {
    item:any = [];

    constructor(
        public navCtrl:NavController,
        public storage: Storage,
        public modalCtrl: ModalController) {

    }

    ionViewDidLoad() {
        this.storage.get('item').then(data => {
            for(let key in data) this.item[key] = data[key];
        });
    }

    schedulerModal(id) {
        let modal = this.modalCtrl.create('ModalSchedulerPage', { id: id });
        modal.present();
    }

    openPage(page){
        this.navCtrl.setRoot(page);
    }

}
