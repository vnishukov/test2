import {InMemoryDbService} from 'angular-in-memory-web-api';
import {IPayment} from '../declarations/payment.interface';

export class InMemPaymentService implements InMemoryDbService {
    createDb() {
        const payments: IPayment[] = [
            {name: 'Ceils', daycost: 20, assign: []},
            {name: 'Boots', daycost: 1, assign: [true]},
            {name: 'Robots', daycost: 100, assign: [false, true]},
            {name: 'Hearts', daycost: 10000, assign: [false]},
        ];
        return {payments};
    }
}
