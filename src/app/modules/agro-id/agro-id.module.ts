import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgroIdComponent } from './components/agro-id/agro-id.component';
import { AgroIdRoutes } from './agro-id.routing';

@NgModule({
  imports: [
    CommonModule,
    AgroIdRoutes,
  ],
  declarations: [AgroIdComponent]
})
export class AgroIdModule { }
