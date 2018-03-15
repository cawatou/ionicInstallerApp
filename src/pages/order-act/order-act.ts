import { Component }                   from '@angular/core';
import { IonicPage, NavController }    from 'ionic-angular';
import { Api }                         from '../../providers/api/api';
import { Storage }                     from '@ionic/storage';

@IonicPage()
@Component({
    selector: 'page-order-act',
    templateUrl: 'order-act.html'
})
export class OrderActPage {
    item: any = [];
    user: any;

    constructor(public navCtrl: NavController, private storage: Storage) {
        
    }
    ionViewDidLoad() {
        this.storage.get('item').then(data => {    
            for(let key in data) this.item[key] = data[key]; 
        })
    }
}
