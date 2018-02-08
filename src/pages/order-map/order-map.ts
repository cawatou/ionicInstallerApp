import { Component, ViewChild, ElementRef }       from '@angular/core';
import { IonicPage, NavController, NavParams }    from 'ionic-angular';
import { Api }                                    from '../../providers/api/api';
import { Storage }                                from '@ionic/storage';

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
    item: any = [];
    user: any;

    constructor(
        public navCtrl: NavController, 
        public storage: Storage,
        public api: Api) {

    }

    ionViewDidLoad(){
        this.storage.get('item').then(data => {
            for(let key in data) this.item[key] = data[key];
            this.api.getMapCoord(this.item.Address).subscribe(data => {
                let coord = data.json().results[0].geometry.location;
                coord.name = data.json().results[0].formatted_address;
                
                console.log(coord);
            });
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
