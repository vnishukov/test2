import {InMemoryDbService} from 'angular-in-memory-web-api';
import IPayment from '../declarations/payment.interface';


export class InMemPaymentService implements InMemoryDbService {
    createDb() {
        const assign = new Map<number, boolean>().set(10, true);
        const payments: IPayment[] = [
            {id: 1, name: 'Ceils', daycost: 20, assign},
            {id: 2, name: 'Boots', daycost: 1, assign},
            {id: 3, name: 'Robots', daycost: 100, assign},
            {id: 4, name: 'Hearts', daycost: 10000, assign},
        ];
        return {payments};
    }
}
