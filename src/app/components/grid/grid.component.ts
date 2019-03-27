import {Component, OnInit} from '@angular/core';
import IPayment from 'src/app/declarations/payment.interface';

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
      daycost: 650,
      assign: new Map<number, boolean>(this.assignInitial)
    });
  }

  removePayment(idx: number): void {
    this.payments.splice(idx, 1);
  }

  setAssignment(payment: IPayment, key: number, event: any): void {
    payment.assign.set(key, event.target.checked);
    console.log(payment.assign, key, event.target.checked);
  }

  show() {
    console.log(this.payments[0].assign);
  }
}
