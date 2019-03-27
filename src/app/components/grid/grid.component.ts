import {Component, OnInit} from '@angular/core';
import {getDaysInMonth} from 'src/app/helpers/date.helper';
import IPayment from '../../declarations/payment.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
  payments: IPayment[] = [];
  assignInitial: Map<number, boolean> = new Map<number, boolean>();

  constructor() {}

  ngOnInit() {
    for (let idx = 0; idx < this.months.length; idx++) {
      this.assignInitial.set(idx, false);
    }
  }

  addPayment(): void {
    this.payments.push({
      id: 1,
      name: 'Roga i Kopyta',
      daycost: 1,
      assign: new Map<number, boolean>(this.assignInitial)
    });
  }

  removePayment(idx: number): void {
    this.payments.splice(idx, 1);
  }

  setAssignment(payment: IPayment, key: number, event: any): void {
    payment.assign.set(key, event.target.checked);
    console.log(getDaysInMonth(key));
  }

  getAmount(): number {
    let amount = 0;
    this.payments.forEach((payment) => {
      payment.assign.forEach((value: boolean, key: number) => {
        if (value) {
          amount += payment.daycost * getDaysInMonth(key + 1);
        }
      });
    });
    return amount;
  }

  show() {
    console.log(this.payments[0].assign);
  }
}
