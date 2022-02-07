import { SignUpPasswordComponent } from './components/sign-up-password/sign-up-password.component';
import { SignUpPage } from './pages/sign-up/sign-up.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgroIdComponent } from './components/agro-id/agro-id.component';
import { AgroIdRoutes } from './agro-id.routing';
import { SignInPage } from './pages/sign-in/sign-in.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* Sign Components */
import { SignUpLoginComponent } from './components/sign-up-login/sign-up-login.component';
import { SignUpInfoComponent } from './components/sign-up-info/sign-up-info.component';
import { SignUpConfirmationComponent } from './components/sign-up-confirmation/sign-up-confirmation.component';
import { SignUpSuccessComponent } from './components/sign-up-success/sign-up-success.component';
/* NG-ZORRO-MODULES */
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzStepsModule } from 'ng-zorro-antd/steps';

@NgModule({
  imports: [
    CommonModule, 
    AgroIdRoutes,
    ReactiveFormsModule, 
    FormsModule, 
    /* NG-ZORRO-MODULES */
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzIconModule,
    NzResultModule,
    NzStepsModule
  ],
  declarations: [
    AgroIdComponent,
    SignUpPage,
    SignInPage,
    SignUpLoginComponent,
    SignUpInfoComponent,
    SignUpPasswordComponent,
    SignUpConfirmationComponent,
    SignUpSuccessComponent
  ],
})
export class AgroIdModule {}
