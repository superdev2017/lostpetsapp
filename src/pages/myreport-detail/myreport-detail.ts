import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyreportDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myreport-detail',
  templateUrl: 'myreport-detail.html',
})
export class MyreportDetailPage {
    selectedPet: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.selectedPet = navParams.get('pet');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyreportDetailPage');
  }

}
