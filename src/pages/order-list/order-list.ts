import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-order-list',
  templateUrl: 'order-list.html'
})
export class OrderListPage {
  currentItems: Item[];

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) {
    this.items.query()
        .subscribe(data => this.currentItems = data.json());
  }

  ionViewDidLoad() {
  }

  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  deleteItem(item) {
    this.items.delete(item);
  }

  openItem(item: Item) {
    this.navCtrl.push('OrderDetailPage', {
      item: item
    });
  }
}