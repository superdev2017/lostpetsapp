import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyreportListPage } from './myreport-list';

@NgModule({
  declarations: [
    MyreportListPage,
  ],
  imports: [
    IonicPageModule.forChild(MyreportListPage),
  ],
})
export class MyreportListPageModule {}
