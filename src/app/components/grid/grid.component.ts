import {Component, EventEmitter, Input, Output} from '@angular/core';
import IPayment from '../../declarations/payment.interface';
import {getDaysInMonth} from '../../helpers/date.helper';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  @Input()
  payments: IPayment[] = [];

  @Input()
  months: string[] = [];

  @Output()
  update: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  remove: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  onRemove(payment: IPayment) {
    this.remove.emit(payment);
  }

  setAssignment(payment: IPayment, key: number, event: any): void {
    payment.assign[key] = event.target.checked;
    this.update.emit(payment);
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
