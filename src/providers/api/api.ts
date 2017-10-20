import 'rxjs/add/operator/map';

import {Injectable} from '@angular/core';
import {Http, RequestOptions, URLSearchParams} from '@angular/http';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
    //url: string = 'https://example.com/api/v1';
    url:string = 'http://192.168.88.55:84/DomofonAPI/hs/MastersAPI';


    constructor(public http:Http) {
    }

    get(endpoint:string, params?:any, options?:RequestOptions) {
        if (!options) {
            options = new RequestOptions();
        }

        this.url = this.url + endpoint;
        if (params) {
            for (let k in params) this.url = this.url + '/' + params[k];
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
