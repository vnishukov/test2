import {Component, EventEmitter, HostListener, Output} from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  public operationForm = this.fb.group({
    paymentName: ['', Validators.required],
    paymentDayCost: ['', [Validators.required, Validators.min(0)]]
  });

  @Output()
  submit: EventEmitter<any> = new EventEmitter<any>();

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'Enter':
        this.onSubmit();
        break;
      case 'Escape':
        this.operationForm.reset();
        break;
      default:
        break;
    }
  }

  constructor(private fb: FormBuilder) {}

  get paymentName(): AbstractControl {
    return this.operationForm.get('paymentName');
  }

  get paymentDayCost(): AbstractControl {
    return this.operationForm.get('paymentDayCost');
  }

  onSubmit() {
    if (this.operationForm.valid) {
      this.submit.emit({name: this.paymentName.value, daycost: this.paymentDayCost.value});
      this.operationForm.reset();
    }
  }
}
