import { Component }                            from '@angular/core';
import { IonicPage , LoadingController }        from 'ionic-angular';
import { NavController, ModalController }       from 'ionic-angular';
import { Api }                                  from '../../providers/api/api';
import { Storage }                              from '@ionic/storage';

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
    params:any = {};
    page:number = 1;
    onPage:number = 5;
    beginDate:any = '01.01.0001 0:00:00';
    endDate:any = '01.01.0001 0:00:00';
    
    constructor(
        public navCtrl: NavController,
        public api: Api,
        private storage: Storage,
        public modalCtrl: ModalController,
        public loadingCtrl: LoadingController) {

        this.params = {
            'method': 'requests',
            'fulfilled': '0',
            'master': 'user',
            'page_number': this.page,
            'on_page': this.onPage,
            'beginDate': this.beginDate,
            'endDate': this.endDate
        };
    }

    ionViewDidLoad() {
        this.presentLoading();
        this.storage.get('user').then(user => {
            console.log(user);
            this.params.master = user.Master;
            this.api.get(this.params)
                .subscribe(data => this.items = data.json());
        });
    }

    doInfinite(infiniteScroll){
        setTimeout(() => {
            this.page++;
            this.params.page_number = this.page;
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
