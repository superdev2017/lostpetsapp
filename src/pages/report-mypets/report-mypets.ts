import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the ReportMypetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report-mypets',
  templateUrl: 'report-mypets.html',
})
export class ReportMypetsPage {
    selectedPet: any;
    pet: any;
    public event = {
        month: '1990-02-19',
        timeStarts: '07:43',
        timeEnds: '1990-02-20'
    }
    testCheckboxOpen: boolean;
    testCheckboxResult;

    constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
      //this.selectedPet = navParams.get('pet');


      this.pet = {
          id: 1,
              name: 'William',
              description: 'Cute pets',
              type: 'Cat',
              weight: 23,
              sex: 'female',
              age: 3,
              photo: 'assets/imgs/thumbnail-puppy-1.jpg',
              state: 'lost',
              size: 'small',
              notifies:[
              '',
              '',
              ''
          ],

      }
      this.selectedPet = this.pet;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportMypetsPage');
  }
    reportmyPets() {
        this.loadingCtrl.create({
            content: 'Now Reporting...',
            duration: 700,
            dismissOnPageChange: true
        }).present();
    }

}
