import { Component, ViewChild, ElementRef }       from '@angular/core';
import { IonicPage, NavController }               from 'ionic-angular';
import { Api }                                    from "../../providers/api/api";
import { Storage }                                from '@ionic/storage';
import * as moment                                from "moment";

declare var google: any;

@IonicPage()
@Component({
    selector: 'page-map',
    templateUrl: 'map.html'
})

export class MapPage {
    today:any;

    @ViewChild('mapCanvas') mapElement: ElementRef;
    constructor(public navCtrl:NavController, public api:Api, private storage: Storage ) {}

    ionViewDidLoad() {
        this.storage.get('user').then(val => {
            let user = val;
            let params = ['requests', '0', user.Master, '1', '3'];
            this.api.get(params).subscribe(data => {
                let items = data.json();
                //console.log(this.items);

                let mapEle = this.mapElement.nativeElement;

                let map = new google.maps.Map(mapEle, {
                    center: {lat: 59.9358298, lng: 30.2857049},
                    zoom: 11
                });

                for (var i = 0; i < items.length; i++) {
                    this.api.getMapCoord(items[i].Address).subscribe(data => {
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

        moment.lang('ru');
        this.today = moment().format('DD MMMM');
    }

    openPage(page){
        this.navCtrl.setRoot(page);
    }
}
