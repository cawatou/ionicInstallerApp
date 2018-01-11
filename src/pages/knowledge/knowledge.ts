import {Component}                  from '@angular/core';
import {IonicPage, NavController}   from 'ionic-angular';
import {Api}                        from '../../providers/api/api';

@IonicPage()
@Component({
    selector: 'page-knowledge',
    templateUrl: 'knowledge.html'
})
export class KnowledgePage {
    params: any;
    items: any;

    constructor(public navCtrl:NavController, public api:Api) {
        this.params = ['KnowBase'];
        this.api.get(this.params)
            .subscribe(data => this.items = data.json());
    }

    openMain() {
        this.navCtrl.push('MainPage');
    }

}
