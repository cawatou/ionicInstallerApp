import { ViewChild }                from '@angular/core';
import { Nav, NavController }       from 'ionic-angular';
import { Injectable }               from '@angular/core';
import { Api }                      from '../../providers/api/api';
import { Storage }                   from '@ionic/storage';
@Injectable()

export class Route {
    @ViewChild(Nav)
    nav:Nav;

    constructor(public navCtrl: NavController,
                public api: Api,
                public storage: Storage,
                public route: Route) {
    }

    open(page, data) {
        console.log('fdasfads');
        if(data) this.nav.setRoot(page, data);
        else this.nav.setRoot(page);
    }
}
