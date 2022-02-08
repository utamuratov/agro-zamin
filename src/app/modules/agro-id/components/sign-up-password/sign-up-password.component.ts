import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-sign-up-password',
  templateUrl: './sign-up-password.component.html',
  styleUrls: ['./sign-up-password.component.less']
})
export class SignUpPasswordComponent implements OnInit {
  @Output() changeComponentEvent = new EventEmitter<string>();
  switchNext = 'login';
  switchPrev = 'info'
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      password: ['', [Validators.required]],
      confirm: ['', [this.confirmValidator]],
    });
  }

  ngOnInit(): void {
      
  }

  submitForm(): void {
    console.log('submit', this.validateForm.value);
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
    this.changeComponentEvent.emit(this.switchNext)
  }

  prevComponent(): void {
    this.changeComponentEvent.emit(this.switchPrev)
  }
}

