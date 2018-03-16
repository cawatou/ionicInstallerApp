import { Component, ViewChild }                          from '@angular/core';
import { App, IonicPage, NavParams, ViewController }     from 'ionic-angular';
import { Platform }                                      from 'ionic-angular';
import { Api }                                           from '../../providers/api/api';
import { Storage }                                       from '@ionic/storage';
import { DatePickerDirective }                           from 'ionic3-datepicker';
import * as moment                                       from "moment";

@IonicPage()
@Component({
    selector: 'page-modal-scheduler',
    templateUrl: 'modal-scheduler.html'
})


export class ModalSchedulerPage {    
    public localDate: Date = new Date();
    public initDate: Date = new Date();
    public initDate2: Date = new Date(2015, 1, 1);
    public disabledDates: Date[] = [new Date(2017, 7, 14)];
    public maxDate: Date = new Date(new Date().setDate(new Date().getDate() + 60));
    public min: Date = new Date();    
    
    public task:{ date_begin: string, date_end: string, id: string } = {
        date_begin: '',
        date_end: '',
        id: ''
    };
    private user: any;
    
    @ViewChild(DatePickerDirective) private datepickerDirective:DatePickerDirective;
    constructor(
        public platform: Platform,
        public viewCtrl: ViewController,
        public api: Api,
        public params: NavParams,
        public appCtrl: App,
        private storage: Storage) {

        platform.ready().then(() => {
            console.log('params.id: ', this.maxDate);
            this.task.id = params.get('id');

            this.storage.get('user').then(val => {
                this.user = val;
            });
        })        
    }

    add_task(){
        let params;
        this.task.date_begin = moment(this.task.date_begin).format("DD.MM.YYYY HH:mm:ss");
        this.task.date_end = moment(this.task.date_end).format("DD.MM.YYYY HH:mm:ss");

        params = [
            'AddScheduler',        // api method
            this.task.date_begin,  // BeginDate
            this.task.date_end,    // EndDate
            this.task.id,          // RequestID
            this.user.Master       // master
        ];

        console.log('params: ', params);
        this.api.get(params).subscribe(data => {
            console.log('api response: ', data);
        });

        this.viewCtrl.dismiss();
        this.appCtrl.getRootNav().push('SchedulerPage');
    }


    public Log(stuff): void {
        console.log(stuff);
    }

    public event(data: Date): void {
        this.localDate = data;
    }
    setDate(date: Date) {
        console.log(date);
        this.initDate = date;
    }
}
