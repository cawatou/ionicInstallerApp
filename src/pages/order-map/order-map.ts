import { Component, ViewChild, ElementRef }       from '@angular/core';
import { IonicPage, NavController }               from 'ionic-angular';
import { Api }                                    from '../../providers/api/api';
import { Storage }                                from '@ionic/storage';
import { Geolocation }                            from '@ionic-native/geolocation';

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

    constructor(
        public navCtrl: NavController,
        private storage: Storage,
        private geolocation: Geolocation,
        public api: Api) {

    }

    ionViewDidLoad(){
        this.storage.get('item').then(data => {
            for(let key in data) this.item[key] = data[key];
            this.api.getMapCoord(this.item.Address).subscribe(data => {
                let coord = data.json().results[0].geometry.location;

                this.geolocation.getCurrentPosition().then((resp) => {
                    console.log(resp.coords);
                    this.start = {lat: resp.coords.latitude, lng:  resp.coords.longitude };
                    this.end = coord;

                    this.map = new google.maps.Map(this.mapElement.nativeElement, {
                        zoom: 11,
                        center: this.start
                    });

                    this.directionsDisplay.setMap(this.map);

                    this.directionsService.route({
                        origin: this.start,
                        destination: this.end,
                        travelMode: 'DRIVING'
                    }, (response, status) => {
                        if (status === 'OK') {
                            this.directionsDisplay.setDirections(response);
                        } else {
                            window.alert('Directions request failed due to ' + status);
                        }
                    });
                }).catch((error) => {
                    console.log('Error getting location', error);
                });

                 /*   let watch = this.geolocation.watchPosition();
                    watch.subscribe((data) => {
                        console.log(data);
                    })*/
            });
        });

    }

    openPage(page){
        this.navCtrl.setRoot(page);
    }
}
