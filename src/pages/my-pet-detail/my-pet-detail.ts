import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import {MyPetEditPage} from "../my-pet-edit/my-pet-edit";
import { ModalController } from "ionic-angular"
/**
 * Generated class for the MyPetDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-pet-detail',
  templateUrl: 'my-pet-detail.html',
})
export class MyPetDetailPage {

    /**
     * Pet information
     */
    pet: any
    constructor(public navCtrl: NavController
                , public navParams: NavParams
                , public platform: Platform
                , public modalCtrl: ModalController
                , public actionsheetCtrl: ActionSheetController) {

        this.pet = navParams.get('item');
    }


    ionViewDidLoad() {

    }

    showActionSheet() {
        let actionSheet = this.actionsheetCtrl.create({
            /*title: 'Albums',*/
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Edit',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'create' : null,
                    handler: () => {
                        let modal = this.modalCtrl.create(MyPetEditPage, {item: this.pet});
                        modal.present();
                    }
                },
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: () => {
                        console.log('Delete clicked');
                    }
                },
                {
                    text: 'Report',
                    icon: !this.platform.is('ios') ? 'paw' : null,
                    handler: () => {
                        console.log('Share clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel', // will always sort to be on the bottom
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }

}
