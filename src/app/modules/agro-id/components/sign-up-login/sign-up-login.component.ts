import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

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
      password: [null, [Validators.required]],
      confirm: [null, [this.confirmValidator]],
      agree: [null, [Validators.requiredTrue]],
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

  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls['confirm'].updateValueAndValidity());
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.validateForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  nextComponent(): void {
    this.submitForm()
    this.changeComponentEvent.emit(this.switchNext);
  }

  prevComponent(): void {
    this.changeComponentEvent.emit(this.switchPrev)
  }
}
