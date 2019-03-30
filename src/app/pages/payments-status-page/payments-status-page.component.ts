import {Component, OnInit} from '@angular/core';
import {take} from 'rxjs/operators';
import IPayment from '../../declarations/payment.interface';
import {months} from '../../helpers/month.helper';
import {PaymentService} from '../../services/payment.service';
@Component({
  selector: 'app-payments-status-page',
  templateUrl: './payments-status-page.component.html',
  styleUrls: ['./payments-status-page.component.scss']
})
export class PaymentsStatusPageComponent implements OnInit {
  nextId = 0;
  payments: IPayment[] = [];
  assignInitial: {[key: number]: boolean} = {};

  constructor(private paymentService: PaymentService) {}

  ngOnInit() {
    for (let idx = 0; idx < months.length; idx++) {
      this.assignInitial[idx] = false;
    }
    this.fetchPayments();
  }

  get months(): string[] {
    return months;
  }

  addPayment(payment: IPayment): void {
    this.paymentService
      .createPayment({
        id: this.nextId,
        name: payment.name,
        daycost: payment.daycost,
        assign: {...this.assignInitial}
      })
      .pipe(take(1))
      .subscribe(() => this.fetchPayments());
  }

  updatePayment(payment: IPayment): void {
    this.paymentService
      .updatePayment(payment)
      .pipe(take(1))
      .subscribe(() => this.fetchPayments());
  }

  removePayment(payment: IPayment): void {
    this.paymentService
      .deletePayment(payment.id)
      .pipe(take(1))
      .subscribe(() => this.fetchPayments());
  }

  private fetchPayments(): void {
    this.paymentService
      .getPayments()
      .pipe(take(1))
      .subscribe((payments: IPayment[]) => {
        this.setLastId(payments);
        this.payments = payments;
      });
  }

  private setLastId(payments: IPayment[]): void {
    const sortedIds = payments.map((payment) => payment.id).sort((one, two) => one - two);
    const highestId = sortedIds[sortedIds.length - 1];
    this.nextId = highestId + 1;
  }
}
