import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import IPayment from '../declarations/payment.interface';



@Injectable()
export class PaymentService {

    constructor(private httpClient: HttpClient) {

    }

    createPayment(payment: IPayment): Observable<IPayment> {
        return this.httpClient.post<IPayment>('api/payments', payment);
    }

    getPayments(): Observable<IPayment[]> {
        return this.httpClient.get<IPayment[]>('api/payments');
    }

    deletePayment(paymentId: number): Observable<IPayment> {
        return this.httpClient.delete<IPayment>(`api/payments/${paymentId}`);
    }

    updatePayment(payment: IPayment): Observable<IPayment> {
        return this.httpClient.put<IPayment>(`api/payments/${payment.id}`, payment);
    }

}
