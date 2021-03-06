import { Component, ViewChild, ElementRef }            from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { Api }                                         from "../../providers/api/api";
import { Storage }                                     from '@ionic/storage';
import * as moment                                     from "moment";

declare var google: any;

@IonicPage()
@Component({
    selector: 'page-map',
    templateUrl: 'map.html'
})

export class MapPage {
    today:any;

    @ViewChild('mapCanvas') mapElement: ElementRef;
    constructor(
        public navCtrl:NavController,
        public api:Api,
        public loadingCtrl: LoadingController,
        private storage: Storage ) {}

    ionViewDidLoad() {
        this.presentLoading();
        this.storage.get('user').then(user => {
            let params = ['requests', '0', user.Master, '1', '20'];
            this.api.get(params).subscribe(data => {
                let items = data.json();
                console.log(items);

                let mapEle = this.mapElement.nativeElement;

                let map = new google.maps.Map(mapEle, {
                    center: {lat: 59.9358298, lng: 30.2857049},
                    zoom: 11
                });

                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    this.api.getMapCoord(items[i].Address).subscribe(data => {
                        let res = data.json();
                        if(res.status == 'OK'){
                            let coord = res.results[0].geometry.location;
                            coord.name = res.results[0].formatted_address;


                            let infoWindowContent = `<h5>${coord.name}</h5>`;

                            let infoWindow = new google.maps.InfoWindow({
                                content: infoWindowContent
                            });

                            let marker = new google.maps.Marker({
                                position: coord,
                                map: map,
                                title: coord.name
                            });

                            marker.addListener('click', () => {
                                //infoWindow.open(map, marker);
                                this.storage.set('item', item);
                                this.openPage('OrderDetailPage');
                            });

                            google.maps.event.addListenerOnce(map, 'idle', () => {
                                mapEle.classList.add('show-map');
                            });
                        }
                    });
                }
            })
        })

        moment.locale('ru');
        this.today = moment().format('DD MMMM');
    }

    openPage(page){
        this.navCtrl.setRoot(page);
    }

    presentLoading() {
        let loader = this.loadingCtrl.create({
            content: "Пожалуйста подождите",
            duration: 3000
        });
        loader.present();
    }
}
