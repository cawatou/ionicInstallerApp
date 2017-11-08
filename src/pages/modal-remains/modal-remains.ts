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
    select_count: any[];

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

        this.select_count =  Array(10).fill(1);
    }
}
