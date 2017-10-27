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

        let fs = new Array<any>();
        for(var i= 0; i< 5000; i++){
            fs.push(this.getFeature(i));
        }

        this.markerObjects = {
            "type": "FeatureCollection",
            "features": fs
        };


    }

    ionViewDidLoad() {
    }


    getFeature(id: number){
        return   {"type": "Feature", "id": id, "geometry": {"type": "Point", "coordinates": [this.random(55, 57, id), this.random(36, 38, id)]}, "properties": {"balloonContent": "Содержимое балуна", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки"}};
    }

    random(min: number, max: number, id: number){

        let m = id % 333;
        var random = Math.floor(Math.random() *(max-min+m)+min);
        if(random < 0) {
            return random * -1;
        }

        return random;

    }
}
