import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the ReportPetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report-pets',
  templateUrl: 'report-pets.html',
})
export class ReportPetsPage {

    selectedPet: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
      this.selectedPet = navParams.get('pet');
  }

  ionViewDidLoad() {
      //console.log(this.mydata.name);
    console.log('ionViewDidLoad ReportPetsPage');
  }
    reportPets() {
        this.loadingCtrl.create({
            content: 'Now Reporting...',
            duration: 700,
            dismissOnPageChange: true
        }).present();
    }

}
