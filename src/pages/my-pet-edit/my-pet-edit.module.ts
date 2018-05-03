import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyPetEditPage } from './my-pet-edit';

@NgModule({
  declarations: [
    MyPetEditPage,
  ],
  imports: [
    IonicPageModule.forChild(MyPetEditPage),
  ],
})
export class MyPetEditPageModule {}
