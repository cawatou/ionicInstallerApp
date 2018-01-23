import { Component }                                                    from '@angular/core';
import { App, IonicPage, NavController, NavParams, ViewController }     from 'ionic-angular';
import { Api }                                                          from '../../providers/api/api';
import { Storage }                                                      from '@ionic/storage';

@IonicPage()
@Component({
    selector: 'page-modal-scheduler',
    templateUrl: 'modal-scheduler.html'
})
export class ModalSchedulerPage {
    task:{ date_begin: string, date_end: string, id: string } = {
        date_begin: '',
        date_end: '',
        id: ''
    };
    user: any;

    constructor(
        public navCtrl: NavController,
        public viewCtrl: ViewController,
        public api: Api,
        public params: NavParams,
        public appCtrl: App,
        private storage: Storage) {

        console.log('params.id: ', params.get('id'));
        this.task.id = params.get('id');

        this.storage.get('user').then(val => {
            this.user = val;
        });
    }

    add_task(){

        let params;
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
}
