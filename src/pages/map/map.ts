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

    markerObjects : any;

    constructor(public navCtrl:NavController, public navParams:NavParams, public api:Api) {
        this.items = navParams.get('items');

        console.log(this.items);
        let features = new Array<any>();
        var coord = [];
        for (var i = 0; i < this.items.length; i++) {
            this.api.getMapCoord(this.items[i].Address)
                .subscribe(data => {
                    let res = data.json().response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
                    let lon = res[0];
                    let lat = res[1];
                    features.push(this.getFeature(lat, lon));
                    //coord.push({'lon': lon, 'lat': lat});
                });
        }

        // this.markers = coord;
        //
        //
        // for(var i= 0; i< 5000; i++){
        //     features.push(this.getFeature(i));
        // }

        this.markerObjects = {
            "type": "FeatureCollection",
            "features": features
        };


    }

    getFeature(lat: string, lon: string){
        return   {
            "type": "Feature",
            //"id": id,
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

    ionViewDidLoad() {
    }
}
