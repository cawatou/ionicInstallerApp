import {Component}                  from '@angular/core';
import {Storage}                    from '@ionic/storage';
import {IonicPage, NavController}   from 'ionic-angular';
import {Item}                       from '../../models/item';
import {Api}                        from "../../providers/api/api";
import * as moment                  from "moment";

@IonicPage()
@Component({
    selector: 'page-scheduler',
    templateUrl: 'scheduler.html'
})
export class SchedulerPage {
    tasks:any;
    params:any;
    user:any;

    constructor(public navCtrl:NavController, public api:Api, private storage:Storage) {
        this.storage.get('user').then(val => {
            this.user = val;
            this.params = ['GetScheduler', '01.01.2018 0:00:00', '01.01.2019 0:00:00', this.user.Master];
            this.api.get(this.params)
                .subscribe(data => this.tasks = data.json());
        });

        console.log(moment.locale(), this.tasks);
    }

    openPage(page){
        this.navCtrl.setRoot(page);
    }

    openMap(items) {
        this.navCtrl.push('MapPage', {
            items: items
        });
    }
}
