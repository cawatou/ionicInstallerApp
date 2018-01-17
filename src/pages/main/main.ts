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
    master: any;

    constructor(
        public navCtrl: NavController,
        public api: Api,
        private storage: Storage) {
            this.storage.get('user').then(val => {
                this.master = val.Master; 
            });
    }
    
    openPage(page){
        this.navCtrl.setRoot(page);
    }
}
