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
    calendar:any = [];

    constructor(public navCtrl:NavController, public api:Api, private storage:Storage) {
        let today = moment().format('DD.MM');
        let month = moment(today, 'DD.MM').add(1, 'month').format('DD.MM');

        for(let i = 0; ; i++){
            let date = moment(today, 'DD.MM').add(i, 'd').format('DD.MM');
            if(date == moment(today, 'DD.MM').add(1, 'month').format('DD.MM')) break;
            else this.calendar.push(date);
        }

        this.getTasks(today);
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
            if(this.tasks[key].RequestID == id && this.tasks[key].hide == true) this.tasks[key].hide = false;
            else this.tasks[key].hide = true;
        }
    }

    getTasks(date){
        let startDay = moment(date, 'DD.MM.YYYY 00:00:00').startOf('day').format('DD.MM.YYYY HH:mm:ss');
        let endDay = moment(date, 'DD.MM.YYYY 00:00:00').endOf('day').format('DD.MM.YYYY HH:mm:ss');

        this.storage.get('user').then(val => {
            let user = val;
            let params = ['GetScheduler', startDay, endDay, user.Master];
            this.api.get(params)
                .subscribe(data =>  {
                    this.tasks =  data.json();
                    for(var key in this.tasks){
                        this.tasks[key].hide = true;
                    }
                    console.log(this.tasks);
                })
        })
    }
}
