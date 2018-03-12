import { Component }                            from '@angular/core';
import { Storage }                              from '@ionic/storage';
import { IonicPage, NavController, Platform }   from 'ionic-angular';
import { Api }                                  from "../../providers/api/api";

@IonicPage()
@Component({
    selector: 'page-main',
    templateUrl: 'main.html'
})

export class MainPage {
    master: any;
    count: number;

    constructor(
        public navCtrl: NavController,
        public platform: Platform,
        public api: Api,
        private storage: Storage) {
        platform.ready().then(() => {
            this.storage.get('user').then(user => {
                console.log(user);
                this.master = user.Master;

                let params;
                params = [
                    'amountRequests', // api method
                    0,                // equipment (json)
                    user.Master       // master
                ];
                this.api.get(params).subscribe(data => {
                    this.count = data.json().AmountRequests;
                });
            });


        });
    }
    
    openPage(page){
        this.navCtrl.setRoot(page);
    }
}
