import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-info',
  templateUrl: './sign-up-info.component.html',
  styleUrls: ['./sign-up-info.component.less']
})
export class SignUpInfoComponent implements OnInit {
  @Output() changeComponentEvent = new EventEmitter<string>();
  switchComponentTo = 'password'
  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      firstName: [null],
      lastName: [null],
    });
  }

  ngOnInit(): void {
      
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  nextComponent(): void {
    this.submitForm()
    this.changeComponentEvent.emit(this.switchComponentTo)
  }
}
