import { Component }                   from '@angular/core';
import { IonicPage, NavController }    from 'ionic-angular';
import { Api }                         from '../../providers/api/api';
import { Storage }                     from '@ionic/storage';

@IonicPage()
@Component({
    selector: 'page-modal-remains',
    templateUrl: 'modal-remains.html'
})
export class ModalRemainsPage {
    remains: any;
    user: any;
    params: any;

    constructor(
        public navCtrl: NavController,
        public api: Api,
        private storage: Storage) {

        this.storage.get('user').then(val => {
            this.user = val;
            this.params = ['remains', this.user.Master];
            this.api.get(this.params)
                .subscribe(data => this.remains = data.json());
        });
    }

    openOrderDetail(item, user) {
        this.navCtrl.push('OrderDetailPage', {
            item: item,
            user: user
        });
    }

}
