import 'rxjs/add/operator/map';

import {Injectable} from '@angular/core';
import {Http, RequestOptions} from '@angular/http';

@Injectable()
export class Api {
    url:string;

    constructor(public http:Http) {
    }

    get(params?:any, options?:RequestOptions) {
        this.url = 'http://192.168.88.55:84/DomofonAPI/hs/MastersAPI'; 
        //this.url = 'http://79.173.100.11:84/DomofonAPI/hs/MastersAPI';
        if (!options) {
            options = new RequestOptions();
        }

        if (params) {
            for (let k in params) this.url = this.url + '/' + params[k];
        }

        return this.http.get(this.url, options);
    }

    getMapCoord(address?:any, options?:RequestOptions) {
        this.url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&key=AIzaSyARNKILWOLm83HD1EDxTrVV0tjAhkCzHC8';
        if (!options) {
            options = new RequestOptions();
        }
        return this.http.get(this.url, options);
    }
}
