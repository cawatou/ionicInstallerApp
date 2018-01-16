import { Component }                   from '@angular/core';
import { Storage }                     from '@ionic/storage';
import { IonicPage, NavController }    from 'ionic-angular';
import { Api }                         from "../../providers/api/api";


@IonicPage()
@Component({
    selector: 'page-main',
    templateUrl: 'main.html'
})
export class MainPage {
    params: any;
    user: any;

    constructor(
        public navCtrl: NavController,
        public api: Api,
        private storage: Storage) {
            this.storage.get('user').then(val => {
                this.user = val;
                console.log(this.user);
            });
    }
    
    openPage(page){
        this.navCtrl.setRoot(page);
    }
}
