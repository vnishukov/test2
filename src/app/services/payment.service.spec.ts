import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import IPayment from '../declarations/payment.interface';
import {PaymentService} from './payment.service';

describe('PaymentService', () => {
  let service: PaymentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PaymentService]
    });
    service = TestBed.get(PaymentService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch the payments', () => {
    const testPayments: IPayment[] = [
      {id: 1, name: 'name1', daycost: 10, assign: {10: true}},
      {id: 2, name: 'name2', daycost: 2, assign: {10: true}}
    ];
    service.getPayments().subscribe((payments) => {
      expect(payments.length).toBe(2);
      expect(payments).toEqual(testPayments);
    });
    const request = httpMock.expectOne('api/payments');
    expect(request.request.method).toBe('GET');
    request.flush(testPayments);
  });

  it('should create new payment', () => {
    const testPayment: IPayment = {id: 1, name: 'name1', daycost: 10, assign: {10: true}};
    service.createPayment(testPayment).subscribe((payment) => {
      expect(payment).toEqual(testPayment);
    });
    const request = httpMock.expectOne('api/payments');
    expect(request.request.method).toBe('POST');
    request.flush(testPayment);
  });

  it('should update the payment', () => {
    const testPayment: IPayment = {id: 1, name: 'name1', daycost: 10, assign: {10: true}};
    service.updatePayment(testPayment).subscribe((payment) => {
      expect(payment).toEqual(testPayment);
    });
    const request = httpMock.expectOne(`api/payments/${testPayment.id}`);
    expect(request.request.method).toBe('PUT');
    request.flush(testPayment);
  });

  it('should delete the payment', () => {
    const testPayment: IPayment = {id: 1, name: 'name1', daycost: 10, assign: {10: true}};
    service.deletePayment(testPayment.id).subscribe((payment) => {
      expect(payment).toEqual(testPayment);
    });
    const request = httpMock.expectOne(`api/payments/${testPayment.id}`);
    expect(request.request.method).toBe('DELETE');
    request.flush(testPayment);
  });
});
