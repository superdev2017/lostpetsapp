import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Injectable()
export class CameraProvider {

    cameraImage: any;
    constructor(public camera: Camera) {

    }

    /**
     * get images
     * @param sourceType
     * @param dataOption
     */
    public selectImage(sourceType, dataOption) {

        return new Promise((resolve, reject) => {
            let cameraOptions: CameraOptions = {
                sourceType: sourceType,
                destinationType: dataOption == 'data' ?
                    this.camera.DestinationType.DATA_URL : this.camera.DestinationType.FILE_URI,
                quality: 100,
                encodingType: this.camera.EncodingType.JPEG,
                correctOrientation: true,
                allowEdit: true,
                saveToPhotoAlbum: false,
                targetWidth: 512,
                targetHeight: 512
            };

            this.camera.getPicture(cameraOptions).then(data => {
                this.cameraImage = dataOption == 'data' ? "data:image/jpeg;base64," + data : data;
            }).catch(err=>{
                reject(err);
            })
        })


    }

    /**
     * This mehtod returns base64 Image
     */
    public selectImage1(sourceType, dataOption: number): Promise<any> {
        return new Promise((resolve, reject) => {
            let cameraOptions: CameraOptions = {
                sourceType: sourceType, //this.camera.PictureSourceType.PHOTOLIBRARY,
                destinationType: dataOption,
                quality: 100,
                encodingType: this.camera.EncodingType.JPEG,
                correctOrientation: true,
                allowEdit: true,
                saveToPhotoAlbum: false,
                targetWidth: 512,
                targetHeight: 512
            };

            this.camera.getPicture(cameraOptions).then((data) => {
                this.cameraImage =  data; resolve(this.cameraImage);
            }).catch(err=>{
                reject(err);
            });
        });
    }

}
