import { SignUpPage } from './pages/sign-up/sign-up.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgroIdComponent } from './components/agro-id/agro-id.component';
import { AgroIdRoutes } from './agro-id.routing';
import { SignInPage } from './pages/sign-in/sign-in.page';

@NgModule({
  imports: [CommonModule, AgroIdRoutes],
  declarations: [
    AgroIdComponent,
    SignUpPage,
    SignInPage
  ],
})
export class AgroIdModule {}
