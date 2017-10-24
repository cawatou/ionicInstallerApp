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

    getMap(address?:any, options?:RequestOptions) {
        this.url = 'https://geocode-maps.yandex.ru/1.x/?format=json&geocode='+ address + '&results=1';
        if (!options) {
            options = new RequestOptions();
        }
        return this.http.get(this.url, options);
    }

    post(endpoint:string, body:any, options?:RequestOptions) {
        return this.http.post(this.url + '/' + endpoint, body, options);
    }

    put(endpoint:string, body:any, options?:RequestOptions) {
        return this.http.put(this.url + '/' + endpoint, body, options);
    }

    delete(endpoint:string, options?:RequestOptions) {
        return this.http.delete(this.url + '/' + endpoint, options);
    }

    patch(endpoint:string, body:any, options?:RequestOptions) {
        return this.http.put(this.url + '/' + endpoint, body, options);
    }
}
