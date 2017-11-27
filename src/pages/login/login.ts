import { Component }                 from '@angular/core';
import { IonicPage, NavController }  from 'ionic-angular';
import { Api }                       from '../../providers/api/api';
import { Storage }                   from '@ionic/storage';


@IonicPage()
@Component({ 
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    account:{ username: string, password: string } = {
        username: '',
        password: ''
    };
    params: any;
    user: any;

    constructor(public navCtrl: NavController, 
                public api: Api,
                private storage: Storage) {
    }

    doLogin() {
        //console.log(this.account);
        this.params = [
            'autorization',          // api method
            this.account.username,   // login
            this.account.password    // pass
        ];
        this.api.get(this.params).subscribe(data => {
            //console.log(data.json());
            this.user = data.json();
            this.storage.set('user', this.user);
            this.navCtrl.setRoot('MainPage');
            //this.navCtrl.push('OrderListPage');
        });
    }

}
