import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MyPets} from "../../mocks/my-pets";
import {MyPetDetailPage} from "../my-pet-detail/my-pet-detail";
import {MyPetEditPage} from "../my-pet-edit/my-pet-edit";

/**
 * Generated class for the MyPetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-pets',
  templateUrl: 'my-pets.html',
})
export class MyPetsPage {


    /**
     * the list of my pets
     */
    pets: any[] = MyPets;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {

    }

    gotoDetail(event, item) {

        console.log(item);
        this.navCtrl.push(MyPetDetailPage, {
            item: item
        });

    }

    addPet() {
        this.navCtrl.push(MyPetEditPage, {
            item: {id: null}
        });
    }

}
