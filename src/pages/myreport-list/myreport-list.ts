import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MyReports} from "../../mocks/myreports"
import {MyreportDetailPage} from "../myreport-detail/myreport-detail";
/**
 * Generated class for the MyreportListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myreport-list',
  templateUrl: 'myreport-list.html',
})
export class MyreportListPage {
    pets: any[];
    myreports: any = MyReports
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.pets = [];
      for(let i = 0; i < 4; i++) {
          this.pets.push({
              photo: this.myreports[i].photo,
              state: this.myreports[i].state,
              name: this.myreports[i].name,
              ownername: this.myreports[i].ownername,
              phone: this.myreports[i].phone,
              email: this.myreports[i].email,
              lostlocation: this.myreports[i].lostlocation,
              losttime: this.myreports[i].losttime
          });
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyreportListPage');
  }
    itemTapped(event, item) {
        this.navCtrl.push(MyreportDetailPage, {
            pet: item
        });
    }

}
