import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineConsultantComponent } from './components/online-consultant/online-consultant.component';
import { OnlineConsultantRoutes } from './online-consultant.routing';
import { SharedeModule } from 'src/app/shared/core.module';

@NgModule({
  imports: [
    CommonModule,
    SharedeModule,
    OnlineConsultantRoutes
  ],
  declarations: [OnlineConsultantComponent]
})
export class OnlineConsultantModule { }
