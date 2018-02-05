import {Component}                  from '@angular/core';
import {Storage}                    from '@ionic/storage';
import {IonicPage, NavController}   from 'ionic-angular';
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
    startDay:any;
    endDay:any;

    fdate:any; // first date
    sdate:any; // second date
    tdate:any; // third date

    constructor(public navCtrl:NavController, public api:Api, private storage:Storage) {
        this.getTasks(moment().format('DD.MM'));
    }

    openPage(page){
        this.navCtrl.setRoot(page);
    }

    openMap(items) {
        this.navCtrl.push('MapPage', {
            items: items
        });
    }

    showItem(id){
        for(var key in this.tasks){
            if(this.tasks[key].RequestID == id) this.tasks[key].hide = false;
            else this.tasks[key].hide = true;
        }
    }

    getTasks(date){
        this.fdate = date;
        this.sdate = moment(date, 'DD.MM').add(1, 'd').format('DD.MM');
        this.tdate = moment(date, 'DD.MM').add(2, 'd').format('DD.MM');

        this.startDay = moment(date, 'DD.MM.YYYY 00:00:00').startOf('day').format('DD.MM.YYYY HH:mm:ss');
        this.endDay = moment(date, 'DD.MM.YYYY 00:00:00').endOf('day').format('DD.MM.YYYY HH:mm:ss');

        this.storage.get('user').then(val => {
            this.user = val;
            this.params = ['GetScheduler', this.startDay, this.endDay, this.user.Master];
            this.api.get(this.params)
                .subscribe(data =>  {
                    this.tasks =  data.json();
                    for(var key in this.tasks){
                        this.tasks[key].hide = true;
                    }
                })
        })
    }
}
