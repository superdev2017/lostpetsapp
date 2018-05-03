import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LostPetslistPage } from './lost-petslist';

@NgModule({
  declarations: [
    LostPetslistPage,
  ],
  imports: [
    IonicPageModule.forChild(LostPetslistPage),
  ],
})
export class LostPetslistPageModule {}
