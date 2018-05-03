import { Component } from '@angular/core';
import { ActionSheetController, IonicPage, LoadingController, NavController, NavParams, ActionSheet } from 'ionic-angular';
import { USER_PROFILE } from "../../mocks/user"
import {CameraProvider} from "../../providers/camera";

@IonicPage()
@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html',
})
export class SettingsPage {

    /**
     * segment type
     */
    type: any = 'profile'

    user: any = USER_PROFILE

    selectedPicture: any;
    selectedPictureTweet: any;
    loading: any;


    constructor(public navCtrl: NavController
        , public cameraService: CameraProvider
        , public actionSheetCtrl: ActionSheetController
        , public loadingCtrl: LoadingController
        , public navParams: NavParams) {
    }

    ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    }


    getPicture() {
        let actionSheet: ActionSheet;
        actionSheet = this.actionSheetCtrl.create({
            title: 'Select image source',
            buttons: [
                {
                    text: 'From Photo Library',
                    role: 'destructive',
                    handler: () => {
                        this.loading = this.loadingCtrl.create({content: 'Please wait...'});
                        this.loading.present();
                        this.cameraService.selectImage1(0, 0).then(resp => {
                            console.log(resp);

                            this.selectedPicture = "data:image/jpeg;base64," + resp;
                            this.selectedPictureTweet = resp;
                            /*this.postForm.patchValue({
                                picture: 'pic selected'
                            });*/
                            this.loading.dismiss();
                        }, err => {
                            console.log(err);
                            this.loading.dismiss();
                        });

                    }
                }, {
                    text: 'Take a picture',
                    role: 'destructive',
                    handler: () => {
                        this.loading = this.loadingCtrl.create({content: 'Please wait...'});
                        this.loading.present();
                        this.cameraService.selectImage1(1, 0).then(resp => {

                            console.log(resp);
                            this.selectedPicture = "data:image/jpeg;base64," + resp;
                            this.selectedPictureTweet = resp;
                            /*this.postForm.patchValue({
                                picture: 'pic selected'
                            });*/
                            this.loading.dismiss();
                        }, err => {
                            console.log(err);
                            this.loading.dismiss();
                        });
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                        //this.loading.dismiss();
                    }
                }
            ]
        });
        actionSheet.present();
    }

}
