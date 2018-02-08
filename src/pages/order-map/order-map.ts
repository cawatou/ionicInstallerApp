import { Component, ViewChild, ElementRef }       from '@angular/core';
import { IonicPage, NavController, NavParams }    from 'ionic-angular';
import { Api }                                    from '../../providers/api/api';

declare var google;

@IonicPage()
@Component({
    selector: 'page-order-map',
    templateUrl: 'order-map.html'
})
export class OrderMapPage {

    @ViewChild('map') mapElement: ElementRef;
    map: any;
    start: any;
    end: any;
    directionsService = new google.maps.DirectionsService;
    directionsDisplay = new google.maps.DirectionsRenderer;
    item: any;
    user: any;

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams, 
        public api: Api) {

        this.item = navParams.get('item');
        this.user = navParams.get('user');
    }

    ionViewDidLoad(){
        this.api.getMapCoord(this.item.Address).subscribe(data => {
            let coord = data.json().results[0].geometry.location;
            coord.name = data.json().results[0].formatted_address;

            console.log(coord);
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
