import { Component }                              from '@angular/core';
import { IonicPage, NavController, NavParams }    from 'ionic-angular';
import { Api }                                    from '../../providers/api/api';

@IonicPage()
@Component({
    selector: 'page-order-act',
    templateUrl: 'order-act.html'
})
export class OrderActPage {
    item: any;
    user: any;

    constructor(public navCtrl: NavController, navParams: NavParams, public api: Api) {
                
          }

    openOrderDetail(item, user) {
        this.navCtrl.push('OrderDetailPage', {
            item: item,
            user: user
        });
    }

}
