import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {

    constructor(private http: Http) {
        
    }

    login(username: string, password: string): Observable<boolean> {
        let url = 'http://teledom.skipodev.ru/authmobile?login=' + username +'&password=' + password;

        return this.http.post(url)  
            .map((response: Response) => {
                let user = response.json();
                localStorage.setItem('user', JSON.stringify(user));
                return user;
            });
    }

    logout(): void {
        localStorage.removeItem('user');
    }
}
