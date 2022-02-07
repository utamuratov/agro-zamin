import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './components/app/app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LanguageService } from './core/services/language.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: LanguageService.getCurrentLanguage(),
    pathMatch: 'full',
  },
  {
    path: ':language',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'market',
        loadChildren: () =>
          import('./modules/market/market.module').then((m) => m.MarketModule),
      },
      {
        path: 'online-consultant',
        loadChildren: () =>
          import('./modules/online-consultant/online-consultant.module').then(
            (m) => m.OnlineConsultantModule
          ),
      },
    ],
  },
  {
    path: ':language/agro-id',
    loadChildren: () =>
      import('./modules/agro-id/agro-id.module').then((m) => m.AgroIdModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
