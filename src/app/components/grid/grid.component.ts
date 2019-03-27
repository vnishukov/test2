import {Component, OnInit} from '@angular/core';
import IPayment from 'src/app/declarations/payment.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  months: string[];
  payments: IPayment[];

  constructor() {}

  ngOnInit() {
    this.months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
    this.payments = [];
  }

  addPayment(): void {
    this.payments.push({
      id: 1,
      name: 'Roga i Kopyta',
      daycost: 650,
      assign: [false, false, false, false, false, false, false, false, false, false, false, false]
    });
  }
}
