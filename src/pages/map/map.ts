import { Component }                              from '@angular/core';
import { IonicPage, NavController, NavParams }    from 'ionic-angular';
import { Api }                                    from "../../providers/api/api";
import { Storage }                                from '@ionic/storage';

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
    markerObjects : any;

    constructor(
        public navCtrl:NavController,
        public api:Api,
        private storage: Storage ) {

        var tt;

        this.storage.get('user').then(val => {
            this.user = val;
            this.params = ['requests', '0', this.user.Master, '1', '3'];
            this.api.get(this.params).subscribe(data => {
                this.items = data.json();
                console.log(this.items);
                let features = [];
                for (var i = 0; i < this.items.length; i++) {
                    this.api.getMapCoord(this.items[i].Address)
                        .subscribe(data => {
                            console.log(data);

                            // let res = data.json().response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
                            // let lon = res[0];
                            // let lat = res[1];
                            // features.push(this.getFeature(lat, lon));
                        });
                }

                // console.log(features);
                //
                // this.markerObjects = {
                //     "type": "FeatureCollection",
                //     "features": features
                // };

            })
        })

       /*
*/

    }

    getFeature(lat: string, lon: string){
        return   {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [lat, lon]
            },
            "properties": {
                "balloonContent": "Содержимое балуна",
                "clusterCaption": "Еще одна метка",
                "hintContent": "Текст подсказки"
            }
        };
    }

    openScheduler(item) {
        this.navCtrl.push('SchedulerPage', {
            item: item
        });
    }

    openMap(items) {
        this.navCtrl.push('MapPage', {
            items: items
        });
    }

    openMain() {
        this.navCtrl.push('MainPage');
    }

    openProfile() {
        this.navCtrl.push('ProfilePage');
    }
}
