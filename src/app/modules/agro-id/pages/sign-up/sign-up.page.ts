import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.less']
})
export class SignUpPage implements OnInit {
  
  signUpForm = 'info'
  constructor() { }

  ngOnInit() {
  
  }

  swtichTo(item: string): void {
    this.signUpForm = item
  }
}
