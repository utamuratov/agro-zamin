import { HomeComponent } from './pages/home/home.component';
import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* NG-ZORRO-MODULES */
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { ServiceLocator } from './core/services/locator.service';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SEOResolver } from './core/resolvers/seo.resolver';
import { SEOService } from './core/services/seo.service';
import { CoreModule } from './core/core.module';

registerLocaleData(ru);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    BreadcrumbComponent
  ],
  imports: [
    CoreModule,

    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    /* NG-ZORRO-MODULES */
    NzButtonModule,
    NzSelectModule,
    NzBreadCrumbModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: ru_RU },
    SEOResolver,
    SEOService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    ServiceLocator.injector = this.injector;
  }
}
