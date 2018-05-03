import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ReportPetsPage} from "../report-pets/report-pets";
import {OtherPets} from "../../mocks/other-pets"
/**
 * Generated class for the LostPetslistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lost-petslist',
  templateUrl: 'lost-petslist.html',
})
export class LostPetslistPage {
    pets: any[];
    otherpets: any = OtherPets
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.pets = [];
      for(let i = 0; i < 4; i++) {
          this.pets.push({
              photo: this.otherpets[i].photo,
              state: this.otherpets[i].state,
              name: this.otherpets[i].name,
              ownername: this.otherpets[i].ownername,
              phone: this.otherpets[i].phone,
              email: this.otherpets[i].email,
              lostlocation: this.otherpets[i].lostlocation,
              losttime: this.otherpets[i].losttime
          });
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LostPetslistPage');
  }
    itemTapped(event, item) {
        this.navCtrl.push(ReportPetsPage, {
            pet: item
        });
    }

}
