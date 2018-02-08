import { Component }                   from '@angular/core';
import { Storage }                     from '@ionic/storage';
import { IonicPage, NavController }    from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-main',
    templateUrl: 'main.html'
})
export class MainPage {
    master: any;

    constructor(
        public navCtrl: NavController,
        private storage: Storage) {
            this.storage.get('user').then(user => {
                this.master = user.Master;
            });
    }
    
    openPage(page){
        this.navCtrl.setRoot(page);
    }
}
