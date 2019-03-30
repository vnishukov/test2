import {HttpClient} from '@angular/common/http';
import {fakeAsync} from '@angular/core/testing';
import {Observable, of} from 'rxjs';
import IPayment from 'src/app/declarations/payment.interface';
import {PaymentsStatusPageComponent} from './payments-status-page.component';

class PaymentServiceMock {
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
  let paymentsStub: IPayment[];
  const fakeHttpClient = {
    get: () => {},
    post: () => {},
    put: () => {},
    delete: () => {}
  };

  beforeEach(() => {
    paymentService = new PaymentServiceMock(fakeHttpClient as any);
    component = new PaymentsStatusPageComponent(paymentService as any);
    paymentsStub = [
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
    ] as IPayment[];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have nextId field initialized by 0', () => {
    expect(component.nextId).toEqual(0);
  });

  it('should fetch payments on ititialization', fakeAsync(() => {
    spyOn(paymentService, 'getPayments').and.returnValue(of(paymentsStub));
    component.ngOnInit();
    expect(paymentService.getPayments).toHaveBeenCalledTimes(1);
    expect(component.payments.length).toEqual(2);
  }));

  it('should populate assignInitial with 12 items on ititialization', fakeAsync(() => {
    spyOn(paymentService, 'getPayments').and.returnValue(of(paymentsStub));
    component.ngOnInit();
    expect(component.assignInitial[11]).toBeFalsy();
  }));

  it('should increment lastId field to highest of payment.id + 1 on ititialization', fakeAsync(() => {
    spyOn(paymentService, 'getPayments').and.returnValue(of(paymentsStub));
    component.ngOnInit();
    expect(component.nextId).toEqual(3);
  }));

  it('should correct increment lastId even if get payments not ordered by id', fakeAsync(() => {
    const unOrderedList = [
      ...paymentsStub,
      {id: 5, name: 'P5', assign: {}},
      {id: 7, name: 'P7', assign: {}},
      {id: 4, name: 'P4', assign: {}}
    ];
    spyOn(paymentService, 'getPayments').and.returnValue(of(unOrderedList));
    component.ngOnInit();
    expect(component.nextId).toEqual(8);
  }));

  it('should returnarray of months', () => {
    expect(component.months.length).toEqual(12);
  });

  it('should create payment', fakeAsync(() => {
    const nPayment: IPayment = {...paymentsStub[1], id: 3, name: 'P3', daycost: 30};
    spyOn(paymentService, 'getPayments').and.returnValue(of(paymentsStub));
    spyOn(paymentService, 'createPayment').and.returnValue(of(nPayment));
    component.addPayment(nPayment);
    expect(paymentService.createPayment).toHaveBeenCalledTimes(1);
  }));

  it('should update payment', fakeAsync(() => {
    const uPament: IPayment = paymentsStub[0];
    spyOn(paymentService, 'getPayments').and.returnValue(of(paymentsStub));
    spyOn(paymentService, 'updatePayment').and.returnValue(of(uPament));
    component.updatePayment(uPament);
    expect(paymentService.updatePayment).toHaveBeenCalledTimes(1);
  }));

  it('should delete payment', fakeAsync(() => {
    const dPayment: IPayment = paymentsStub[1];
    spyOn(paymentService, 'getPayments').and.returnValue(of(paymentsStub));
    spyOn(paymentService, 'deletePayment').and.returnValue(of(dPayment));
    component.removePayment(dPayment);
    expect(paymentService.deletePayment).toHaveBeenCalledTimes(1);
  }));
});
