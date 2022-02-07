import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-login',
  templateUrl: './sign-up-login.component.html',
  styleUrls: ['./sign-up-login.component.less'],
})
export class SignUpLoginComponent implements OnInit {
  @Output() changeComponentEvent = new EventEmitter<string>();

  switchNext = 'confirm';
  switchPrev = 'password'
  validateForm!: FormGroup;
  toggle: boolean = true;
  buttonTxt = true;
  validPhone = /(^\+\d\d\d\d\d\d\d\d\d\d\d\d)$/;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      phoneNumber: [
        null,
        [Validators.required, Validators.pattern(this.validPhone)],
      ],
      email: [null, [Validators.email]],
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  toggleInfo(): void {
    if (this.toggle === false) {
      this.validateForm.controls['email'].setValidators(null);
      this.validateForm.controls['email'].setValue(null);
      this.validateForm.controls['phoneNumber'].setValidators([
        Validators.required,
        Validators.pattern(this.validPhone),
      ]);
    } else {
      this.validateForm.controls['email'].setValidators([
        Validators.required,
        Validators.email,
      ]);
      this.validateForm.controls['phoneNumber'].setValidators(null);
      this.validateForm.controls['phoneNumber'].setValue(null);
    }
    this.validateForm.controls['phoneNumber'].updateValueAndValidity();
    this.validateForm.controls['email'].updateValueAndValidity();
    this.toggle = !this.toggle;
    this.buttonTxt = !this.buttonTxt;
  }

  nextComponent(): void {
    this.submitForm()
    this.changeComponentEvent.emit(this.switchNext);
  }

  prevComponent(): void {
    this.changeComponentEvent.emit(this.switchPrev)
  }
}
