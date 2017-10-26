import {Component}                              from '@angular/core';
import {IonicPage, NavController, NavParams}    from 'ionic-angular';
import {Api}                                    from "../../providers/api/api";


@IonicPage()
@Component({
    selector: 'page-map',
    templateUrl: 'map.html'
})
export class MapPage {
    items: any;
    markers: any[];


    constructor(public navCtrl:NavController, public navParams:NavParams, public api:Api) {
        this.items = navParams.get('items');

        var coord = [];
        for (var i = 0; i < this.items.length; i++) {
            this.api.getMapCoord(this.items[i].Address)
                .subscribe(data => {
                    let res = data.json().response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
                    let lon = res[0];
                    let lat = res[1];
                    coord.push({'lon': lon, 'lat': lat});
                });
        }

        this.markers = coord;
    }

    ionViewDidLoad() {
    }

}
