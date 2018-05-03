import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {HomePage} from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username:string;
  password:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  login(){
    console.log("username"+ this.username);
    console.log("password"+ this.password);
    this.navCtrl.setRoot(HomePage);

  }
  goRegister(){
    this.navCtrl.push(RegisterPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
