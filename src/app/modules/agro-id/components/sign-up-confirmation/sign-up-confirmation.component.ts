import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sign-up-confirmation',
  templateUrl: './sign-up-confirmation.component.html',
  styleUrls: ['./sign-up-confirmation.component.less'],
})
export class SignUpConfirmationComponent implements OnInit {
  @Output() changeComponentEvent = new EventEmitter<string>();
  switchComponentTo = 'success';
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      num1: [null, [Validators.required]],
      num2: [null, [Validators.required]],
      num3: [null, [Validators.required]],
      num4: [null, [Validators.required]],
      num5: [null, [Validators.required]],
      num6: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    let confirmData = []
    for (const key in this.validateForm.value) {
      confirmData.push(this.validateForm.value[key])
    }
    let concatedInputs = confirmData.join('')
    console.log('submit', {concatedInputs});
  }

  nextComponent(): void {
    this.submitForm()
    this.changeComponentEvent.emit(this.switchComponentTo);
  }
}
