import { Component }                              from '@angular/core';
import { IonicPage, NavController, NavParams }    from 'ionic-angular';
import { Api }                                    from '../../providers/api/api';

@IonicPage()
@Component({
    selector: 'page-order-map',
    templateUrl: 'order-map.html'
})
export class OrderMapPage {
    item: any;
    user: any;
    lat: any;
    lon: any;
    balloonBody: string;
    ln: '30.335';
    lt: '59.944';

    constructor(public navCtrl: NavController, navParams: NavParams, public api: Api) {

        this.item = navParams.get('item');
        this.user = navParams.get('user');

        this.api.getMapCoord(this.item.Address)
            .subscribe(data => {
                let coord = data.json().response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
                this.lon = coord[0];
                this.lat = coord[1];
                this.balloonBody = this.item.Address;
            });
    }

    openOrderDetail(item, user) {
        this.navCtrl.push('OrderDetailPage', {
            item: item,
            user: user
        });
    }

    openOrderConfirm(item) {
        this.navCtrl.push('OrderConfirmPage', {
            item: item
        });
    }
}
