import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineConsultantComponent } from './components/online-consultant/online-consultant.component';
import { OnlineConsultantRoutes } from './online-consultant.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/core/helpers/http-loader-factory';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    OnlineConsultantRoutes
  ],
  declarations: [OnlineConsultantComponent]
})
export class OnlineConsultantModule { }
