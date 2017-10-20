import {Component}                 from '@angular/core';
import {IonicPage, NavController}  from 'ionic-angular';
import {Api}                       from '../../providers/api/api';

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    account:{ username:string, password:string } = {
        username: '',
        password: ''
    };
    params:any;

    constructor(public navCtrl:NavController, public api:Api) {
    }

    doLogin() {
        this.params = [
            'autorization',          // api method
            this.account.username,   // login
            this.account.password    // pass
        ];
        this.api.get(this.params).subscribe(data => {
            //console.log(data.json());
            this.navCtrl.push('OrderListPage', {
                user: data.json()
            });
        });
    }
}
