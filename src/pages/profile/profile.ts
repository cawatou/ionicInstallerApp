import { Component }                              from '@angular/core';
import { Storage }                                from '@ionic/storage';
import { IonicPage, NavController }               from 'ionic-angular';
import { Api }                                    from "../../providers/api/api";
import { Item }                                   from '../../models/item';


@IonicPage()
@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {
    items:Item[];
    params: any;
    user: any;

    constructor(public navCtrl: NavController, public api: Api, private storage: Storage) {
        this.storage.get('user').then(val => {
            this.user = val;
            this.params = ['requests', '0', this.user.Master, '1', '3'];
            this.api.get(this.params)
                .subscribe(data => this.items = data.json());
        });
    }

    openPage(page){
        this.navCtrl.setRoot(page);
    }

    openMap(items) {
        this.navCtrl.push('MapPage', {
            items: items
        });
    }
}
