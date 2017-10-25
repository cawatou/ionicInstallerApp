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
    items_coord: any;

    constructor(public navCtrl:NavController, public navParams:NavParams, public api:Api) {
        this.items = navParams.get('items');

        for (var i = 0; i < this.items.length; i++) {
            this.api.getMapCoord(this.items[i].Address)
                .subscribe(data => this.items_coord[i] = data.json());
        }
    }

    ionViewDidLoad() {
    }

}
