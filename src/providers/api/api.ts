import 'rxjs/add/operator/map';

import {Injectable} from '@angular/core';
import {Http, RequestOptions} from '@angular/http';

@Injectable()
export class Api {
    url:string;
    options:any;
    
    constructor(public http:Http) {
        this.options = new RequestOptions();
    }

    get(params?:any) {
        this.url = 'http://192.168.88.55:84/DomofonAPI/hs/MastersAPI'; 
        //this.url = 'http://79.173.100.11:84/DomofonAPI/hs/MastersAPI';  
        if (params) {
            for (let k in params) this.url = this.url + '/' + params[k];
        }
        
        return this.http.get(this.url, this.options);
    }

    getMapCoord(address?:any, options?:RequestOptions) {
        this.url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&key=AIzaSyARNKILWOLm83HD1EDxTrVV0tjAhkCzHC8';
        return this.http.get(this.url, this.options);
    }

    sendSMS(data?:any, options?:RequestOptions) {
        var phone = data.phone;
        var text = data.text;
        this.url = 'http://ip.domofons.com/node_sms.php?phone=' + phone + '&code=' + text;

        //this.options.headers.set('Content-Type', '');
        return this.http.get(this.url, this.options);
    }
}
