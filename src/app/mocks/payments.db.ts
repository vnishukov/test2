import {InMemoryDbService} from 'angular-in-memory-web-api';
import IPayment from '../declarations/payment.interface';

export class InMemPaymentService implements InMemoryDbService {
  createDb() {
    const assign = new Map<number, boolean>().set(10, true);
    const payments: IPayment[] = [
      {name: 'Ceils', daycost: 20, assign},
      {name: 'Boots', daycost: 1, assign},
      {name: 'Robots', daycost: 100, assign},
      {name: 'Hearts', daycost: 10000, assign}
    ];
    return {payments};
  }
}
