import { Component }                            from '@angular/core';
import { IonicPage , LoadingController }        from 'ionic-angular';
import { NavController, ModalController }       from 'ionic-angular';
import { Api }                                  from '../../providers/api/api';
import { Storage }                              from '@ionic/storage';
import * as moment                              from "moment";

/**
 * params = [
 *      'method',           // request type
 *      'fulfilled',        // 1 - all , 0 - unfulfilled
 *      'master_name',
 *      'page_number',
 *      'on_page',
 *      'beginDate',
 *      'endDate'
 * ] *
 */
    
@IonicPage()
@Component({
    selector: 'page-order-list',
    templateUrl: 'order-list.html'
})
export class OrderListPage {
    items:any;    
    onPage:number = 5;
    active_tab:number = 1;
    beginDate:any = moment().startOf('day').format('DD.MM.YYYY HH:mm:ss');
    endDate:any = moment().endOf('day').format('DD.MM.YYYY HH:mm:ss');
    day3:any = moment().subtract(3, 'd').format('DD.MM.YYYY HH:mm:ss');
    day7:any = moment().subtract(7, 'd').format('DD.MM.YYYY HH:mm:ss');

    params:any = {
        'method': 'requests',
        'fulfilled': 0,
        'master': 'user',
        'page_number': 1,
        'on_page': this.onPage,
        'beginDate': this.day7,
        'endDate': this.endDate
    };
    
    constructor(
        public navCtrl: NavController,
        public api: Api,
        private storage: Storage,
        public modalCtrl: ModalController,
        public loadingCtrl: LoadingController) {
        
        console.log(this.day3, this.day7);
    }

    ionViewDidLoad() {        
        this.presentLoading();
        this.storage.get('user').then(user => {            
            this.params.master = user.Master;
            this.api.get(this.params)
                .subscribe(data => {
                    if(data.json().Error) this.items = [];
                    else this.items = data.json();
                });
        });
    }

    doInfinite(infiniteScroll){
        console.log('scroll');        
        this.presentLoading();
        setTimeout(() => {
            this.params.page_number++;
            this.api.get(this.params)
                .subscribe(data => {
                    let elements = data.json();                   
                    for (let i = 0; i <= elements.length - 1; i++) {
                        this.items.push(elements[i])
                    }                                          
                });

            infiniteScroll.complete();
        }, 2000);
             
    }
    
    // date, active tab
    getOrders(beginDate, active){
        this.active_tab = active;
        this.params.page_number = 1;
        this.params.beginDate = beginDate;
        this.api.get(this.params)
            .subscribe(data => {
                if(data.json().Error) this.items = [];
                else this.items = data.json();
            })
    }

    openDetail(item) {
        this.storage.set('item', item);
        this.openPage('OrderDetailPage');
    }

    openPage(page){
        this.navCtrl.setRoot(page);
    }

    schedulerModal(id) {
        let modal = this.modalCtrl.create('ModalSchedulerPage', { id: id });
        modal.present();
    }

    presentLoading() {
        let loader = this.loadingCtrl.create({
            content: "Пожалуйста подождите",
            duration: 2000
        });
        loader.present();
    }
}
