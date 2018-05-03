import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyPetDetailPage } from './my-pet-detail';

@NgModule({
  declarations: [
    MyPetDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MyPetDetailPage),
  ],
})
export class MyPetDetailPageModule {}
