import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {getDaysInMonth} from 'src/app/helpers/date.helper';
import IPayment from '../../declarations/payment.interface';
import {months} from '../../helpers/month.helper';
import {PaymentService} from '../../services/payment.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  payments: IPayment[] = [];
  assignInitial: {[key: number]: boolean} = {};

  public operationForm = this.fb.group({
    paymentName: ['', Validators.required],
    paymentDayCost: ['', [Validators.required, Validators.min(0)]]
  });

  constructor(private fb: FormBuilder, private paymentService: PaymentService) {}

  ngOnInit() {
    // this.paymentService
    //   .getPayments()
    //   .pipe(take(1))
    //   .subscribe((result) => {
    //     const assign = new Map<number, boolean>().set(10, true);
    //     this.paymentService
    //       .createPayment({id: 12, name: 'Test', daycost: 200, assign})
    //       .pipe(take(1))
    //       .subscribe((result2) => {
    //         this.paymentService
    //           .getPayments()
    //           .pipe(take(1))
    //           .subscribe((result3) => {
    //             console.log(result3);
    //           });
    //       });
    //   });

    for (let idx = 0; idx < months.length; idx++) {
      this.assignInitial[idx] = false;
    }

    this.paymentService.getPayments().subscribe((payments) => {
      console.log(payments);
      this.payments = payments;
    });
  }

  get paymentName(): AbstractControl {
    return this.operationForm.get('paymentName');
  }

  get paymentDayCost(): AbstractControl {
    return this.operationForm.get('paymentDayCost');
  }

  get months(): string[] {
    return months;
  }

  addPayment(): void {
    if (this.operationForm.valid) {
      this.payments.push({
        id: 1,
        name: this.paymentName.value,
        daycost: this.paymentDayCost.value,
        assign: {...this.assignInitial}
      });
      this.operationForm.reset();
    }
  }

  removePayment(idx: number): void {
    this.payments.splice(idx, 1);
  }

  setAssignment(payment: IPayment, key: number, event: any): void {
    payment.assign[key] = event.target.checked;
  }

  getAmount(): number {
    let amount = 0;
    this.payments.forEach((payment) => {
      for (const key in payment.assign) {
        if (payment.assign[key]) {
          amount += payment.daycost * getDaysInMonth(parseInt(key, 10) + 1);
        }
      }
    });
    return amount;
  }
}
