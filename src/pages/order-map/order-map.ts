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
    balloonHeader = 'Header';
    balloonBody = '<img class="page_avatar_img" src="https://pp.vk.me/c836238/v836238142/1fa2b/G4XOGyOyn9g.jpg" width="200" height="200">';
    balloonFooter = 'Footer';

    constructor(public navCtrl: NavController, navParams: NavParams, public api: Api) {

        this.item = navParams.get('item');
        this.user = navParams.get('user');

        this.api.getMapCoord(this.item.Address)
            .subscribe(data => {
                let coord = data.json().response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
                this.lon = coord[0];
                this.lat = coord[1];
                console.log(coord);
            });

    }

    openOrderDetail(item, user) {
        this.navCtrl.push('OrderDetailPage', {
            item: item,
            user: user
        });
    }

}
