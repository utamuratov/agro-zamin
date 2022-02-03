import { MarketRoutes } from './market.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketComponent } from './components/market/market.component';

@NgModule({
  imports: [
    CommonModule,
    MarketRoutes
  ],
  declarations: [MarketComponent]
})
export class MarketModule { }
