import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import IPayment from '../declarations/payment.interface';



@Injectable()
export class PaymentService {

    private payments: IPayment[] = [];

    constructor(private httpClient: HttpClient) {

    }

    createPayment(payment: IPayment): Observable<IPayment> {
        return this.httpClient.post<IPayment>('api/payments', payment);
    }

    getPayments(): Observable<IPayment[]> {
        return this.httpClient.get<IPayment[]>('api/payments');
    }

}
