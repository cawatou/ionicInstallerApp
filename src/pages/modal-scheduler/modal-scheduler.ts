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
    remains: any;
    user: any;
    equip: {} = {};
    select: {} = {};
    input: {} = {};

    constructor(
        public navCtrl: NavController,
        public viewCtrl: ViewController,
        public api: Api,
        public params: NavParams,
        public appCtrl: App,
        private storage: Storage) {

        console.log('params.id: ', params.get('id'));


        this.storage.get('user').then(val => {
            this.user = val;
            let params = ['remains', this.user.Master];
            this.api.get(params)
                .subscribe(data => this.remains = data.json());
        });
    }

    remains_submit(){
       /* let equip_arr = [];
        for (let key in this.select) {
            if(this.input[key]) equip_arr.push({"Nomenclature": this.select[key],"Amount": this.input[key].toString()});
        };

        this.equip = "{"+JSON.stringify(equip_arr)+"}";
        let params;
        params = [
            'order',                // api method
            this.user.Master,       // master
            this.equip              // equipment (json)
        ];

        console.log('params: ', params);
        this.api.get(params).subscribe(data => {
            console.log(data);
        });
        */
        this.viewCtrl.dismiss();
        this.appCtrl.getRootNav().push('OrderActPage');
        //this.navCtrl.push('OrderActPage');
    }
}
