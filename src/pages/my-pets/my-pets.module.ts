import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyPetsPage } from './my-pets';

@NgModule({
  declarations: [
    MyPetsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyPetsPage),
  ],
})
export class MyPetsPageModule {}
