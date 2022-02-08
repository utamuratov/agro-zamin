import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.less'],
})
export class SignUpPage implements OnInit {
  current = 0
  signUpForm = 'info';

  constructor() {}

  ngOnInit() {}

  swtichTo(item: string): void {
    this.signUpForm = item;
  }
}
