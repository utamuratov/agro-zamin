import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './components/app/app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'agro-id',
        loadChildren: () => import('./modules/agro-id/agro-id.module').then(m => m.AgroIdModule)
      },
      {
        path: 'market',
        loadChildren: () => import('./modules/market/market.module').then(m => m.MarketModule)
      },
      {
        path: 'online-consultant',
        loadChildren: () => import('./modules/online-consultant/online-consultant.module')
          .then(m => m.OnlineConsultantModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
