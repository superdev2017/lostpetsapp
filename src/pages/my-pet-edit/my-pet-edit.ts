import { Component } from '@angular/core';
import {ActionSheetController, IonicPage, LoadingController, NavController, NavParams, ActionSheet} from 'ionic-angular';
import { ViewController } from "ionic-angular"
import { FormGroup, Validators, FormBuilder } from "@angular/forms"
import {CameraProvider} from "../../providers/camera";
import {PET_TYPE, WEIGHT} from "../../mocks/constants"

@IonicPage()
@Component({
  selector: 'page-my-pet-edit',
  templateUrl: 'my-pet-edit.html',
})
export class MyPetEditPage {
    postForm: FormGroup;
    selectedPicture: any;
    selectedPictureTweet: any;
    loading: any;
    weights: any = WEIGHT;
    petTypes: any = PET_TYPE;
    pet: any;
    constructor(public navCtrl: NavController
                , public navParams: NavParams
                , public cameraService: CameraProvider
                , public actionSheetCtrl: ActionSheetController
                , public loadingCtrl: LoadingController
                , private formBuilder: FormBuilder
                , public viewCtrl: ViewController) {



        /*this.postForm = this.formBuilder.group({
            picture: ['', Validators.required],
            name: ['', Validators.required],
            description: ['', Validators.required],
            isFacebook: false,
            isTwitter: false,
            isInstagram: false,
        })*/

        this.pet = navParams.get('item');
        if(!this.pet.id) {

        }
        this.weights = WEIGHT;

        console.log(WEIGHT);
    }

    /**
     * Closing dialog
     */
    dismiss() {
        this.viewCtrl.dismiss();
    }

    /**
     * Get avata for dog
     */
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

    submitAll() {

    }

    detectInstagram() {

    }

}
