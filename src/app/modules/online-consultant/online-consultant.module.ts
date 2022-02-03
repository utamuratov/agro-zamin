import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineConsultantComponent } from './components/online-consultant/online-consultant.component';
import { OnlineConsultantRoutes } from './online-consultant.routing';

@NgModule({
  imports: [
    CommonModule,
    OnlineConsultantRoutes
  ],
  declarations: [OnlineConsultantComponent]
})
export class OnlineConsultantModule { }
