import {InMemoryDbService} from 'angular-in-memory-web-api';
import IPayment from '../declarations/payment.interface';
import {months} from '../helpers/month.helper';

export class InMemPaymentService implements InMemoryDbService {
  createDb() {
    const assignInitial: {[key: number]: boolean} = {};

    for (let idx = 0; idx < months.length; idx++) {
      assignInitial[idx] = false;
    }

    const payments: IPayment[] = [
      {id: 1, name: 'Интернет', daycost: 600, assign: assignInitial},
      {id: 2, name: 'Домашний телефон', daycost: 500, assign: assignInitial},
      {id: 3, name: 'Мобильный телефон', daycost: 300, assign: assignInitial},
      {id: 4, name: 'IPTV', daycost: 200, assign: assignInitial},
      {id: 5, name: 'Подписка на музыку', daycost: 150, assign: assignInitial},
      {id: 6, name: 'Подписка на фильмы', daycost: 150, assign: assignInitial},
      {id: 7, name: 'Абонемент на фитнес', daycost: 1000, assign: assignInitial}
    ];
    return {payments};
  }
}
