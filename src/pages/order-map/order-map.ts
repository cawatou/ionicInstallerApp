import {Component}                              from '@angular/core';
import {IonicPage, NavController, NavParams}    from 'ionic-angular';


@IonicPage()
@Component({
    selector: 'page-order-map',
    templateUrl: 'order-map.html'
})
export class OrderMapPage {
    item:any;
    user:any;

    name:string;
    balloonHeader = 'Header';
    balloonBody = '<img class="page_avatar_img" src="https://pp.vk.me/c836238/v836238142/1fa2b/G4XOGyOyn9g.jpg" alt="Александр  Шатилов" width="200" height="200">';
    balloonFooter = 'Footer';

    constructor(public navCtrl:NavController, navParams:NavParams) {
        //this.item = navParams.get('item') || items.defaultItem;
        this.item = navParams.get('item');
        this.user = navParams.get('user');
        this.name = 'Angular2';
    }

    openOrderDetail(item, user) {
        this.navCtrl.push('OrderDetailPage', {
            item: item,
            user: user
        });
    }

}
