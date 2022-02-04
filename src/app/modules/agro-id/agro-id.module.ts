import { SignUpPage } from './pages/sign-up/sign-up.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgroIdComponent } from './components/agro-id/agro-id.component';
import { AgroIdRoutes } from './agro-id.routing';
import { SignInPage } from './pages/sign-in/sign-in.page';
import { ReactiveFormsModule } from '@angular/forms';
/* NG-ZORRO-MODULES */
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [
    CommonModule, 
    AgroIdRoutes,
    ReactiveFormsModule, 
    /* NG-ZORRO-MODULES */
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzIconModule
  ],
  declarations: [
    AgroIdComponent,
    SignUpPage,
    SignInPage,
  ],
})
export class AgroIdModule {}
