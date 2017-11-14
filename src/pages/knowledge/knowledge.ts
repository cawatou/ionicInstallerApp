import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-knowledge',
  templateUrl: 'knowledge.html'
})
export class KnowledgePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openMain() {
    this.navCtrl.push('MainPage');
  }

}
