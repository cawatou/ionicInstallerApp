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
    user:any = [];
    items:any = [];
    remains:any = [];
    hidden:{ index: boolean, user: boolean, overdue: boolean, remains: boolean, equip: boolean } = {
        index: false,
        user: true,
        overdue: true,
        remains: true,
        equip: true
    };

    constructor(public navCtrl: NavController, public api: Api, private storage: Storage) {

    }

    ionViewDidLoad() {
        this.storage.get('user').then(data => {
            for(let key in data) this.user[key] = data[key];

            this.api.get(['requests', '0', this.user.Master, '1', '6'])
                .subscribe(data => this.items = data.json());

            this.api.get(['remains', this.user.Master])
                .subscribe(data => this.remains = data.json());
        });


    }

    openPage(page){
        this.navCtrl.setRoot(page);
    }

    showItem(tab){
        for(var key in this.hidden){
            if(key == tab) this.hidden[key] = false;
            else this.hidden[key] = true;
        }
        console.log(this.hidden, tab);
    }

    openDetail(item) {
        this.storage.set('item', item);
        this.openPage('OrderDetailPage');
    }
}
