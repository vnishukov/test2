import {HttpClient} from '@angular/common/http';
import {fakeAsync} from '@angular/core/testing';
import {Observable, of} from 'rxjs';
import IPayment from 'src/app/declarations/payment.interface';
import {PaymentsStatusPageComponent} from './payments-status-page.component';

class PaymentServiceMock {
  paymentsStub: IPayment[] = [
    {
      id: 1,
      name: 'P1',
      daycost: 10,
      assign: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false
      }
    },
    {
      id: 2,
      name: 'P2',
      daycost: 20,
      assign: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false
      }
    }
  ];

  constructor(private httpClient: HttpClient) {}

  getPayments(): Observable<IPayment[]> {
    return this.httpClient.get<IPayment[]>('url');
  }

  createPayment(payment: IPayment): Observable<IPayment> {
    return this.httpClient.post<IPayment>('url', payment);
  }

  updatePayment(payment: IPayment): Observable<IPayment> {
    return this.httpClient.put<IPayment>('url', payment);
  }

  deletePayment(payment: IPayment): Observable<IPayment> {
    return this.httpClient.delete<IPayment>(`url/:${payment.id}`);
  }
}

describe('PaymentsStatusPageComponent', () => {
  let paymentService: PaymentServiceMock;
  let component: PaymentsStatusPageComponent;
  const fakeHttpClient = {
    get: () => {},
    post: () => {},
    put: () => {},
    delete: () => {}
  };

  beforeEach(() => {
    paymentService = new PaymentServiceMock(fakeHttpClient as any);
    component = new PaymentsStatusPageComponent(paymentService as any);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch payments on ititialization', fakeAsync(() => {
    spyOn(fakeHttpClient, 'get').and.returnValue(of(paymentService.paymentsStub));
    component.ngOnInit();
    expect(component.payments.length).toEqual(2);
  }));
});
