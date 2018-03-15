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
    public item: any = [];
    public user: any;

    constructor(public navCtrl: NavController, private storage: Storage) {
        
    }
    
    public ionViewDidLoad() {
        this.storage.get('item').then(data => {    
            for(let key in data) this.item[key] = data[key]; 
        })
    }
}
