import { ViewChild }   from '@angular/core';
import { Nav }    from 'ionic-angular';
import { Injectable }       from '@angular/core';
@Injectable()

export class Route {
    @ViewChild(Nav)
    nav:Nav;

    constructor() {
    }

    open(page, data) {
        console.log('fdasfads');
        if(data) this.nav.setRoot(page, data);
        else this.nav.setRoot(page);
    }
}
