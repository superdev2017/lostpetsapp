import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportPetsPage } from './report-pets';

@NgModule({
  declarations: [
    ReportPetsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportPetsPage),
  ],
})
export class ReportPetsPageModule {}
