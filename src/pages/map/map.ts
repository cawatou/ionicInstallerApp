import { Component, ViewChild, ElementRef }       from '@angular/core';
import { IonicPage, NavController, Platform }     from 'ionic-angular';
import { Api }                                    from "../../providers/api/api";
import { Storage }                                from '@ionic/storage';

declare var google: any;

@IonicPage()
@Component({
    selector: 'page-map',
    templateUrl: 'map.html'
})

export class MapPage {
    items: any;
    markers: any[];
    params: any;
    user: any;

    @ViewChild('mapCanvas') mapElement: ElementRef;
    constructor(public navCtrl:NavController, public api:Api, private storage: Storage ) {}

    ionViewDidLoad() {
        this.storage.get('user').then(val => {
            this.user = val;
            this.params = ['requests', '0', this.user.Master, '1', '3'];
            this.api.get(this.params).subscribe(data => {
                this.items = data.json();
                //console.log(this.items);

                let mapEle = this.mapElement.nativeElement;

                let map = new google.maps.Map(mapEle, {
                    center: {lat: 59.9358298, lng: 30.2857049},
                    zoom: 11
                });

                for (var i = 0; i < this.items.length; i++) {
                    this.api.getMapCoord(this.items[i].Address).subscribe(data => {
                        let coord = data.json().results[0].geometry.location;
                        coord.name = data.json().results[0].formatted_address;

                        let infoWindow = new google.maps.InfoWindow({
                            content: `<h5>${coord.name}</h5>`
                        });

                        let marker = new google.maps.Marker({
                            position: coord,
                            map: map,
                            title: coord.name
                        });

                        marker.addListener('click', () => {
                            infoWindow.open(map, marker);
                        });

                        google.maps.event.addListenerOnce(map, 'idle', () => {
                            mapEle.classList.add('show-map');
                        });
                    });
                }
            })
        })
    }

    openPage(page){
        this.navCtrl.setRoot(page);
    }
}
