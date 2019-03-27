import {PaymentService} from './payment.service';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import IPayment from '../declarations/payment.interface';





describe('PaymentService Test: ', () => {
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

    it('Should retrieve payments: API', () => {
        const testPayments: IPayment[] = [
            {id: 1, name: 'name1', daycost: 10, assign: new Map<number, boolean>().set(10, true)},
            {id: 2, name: 'name2', daycost: 2, assign: new Map<number, boolean>().set(10, true)}
        ];

        service.getPayments().subscribe(payments => {
            expect(payments.length).toBe(2);
            expect(payments).toEqual(testPayments);
        });

        const request = httpMock.expectOne('api/payments');

        expect(request.request.method).toBe('GET');

        request.flush(testPayments);
    });

    it('Should create new payment: API', () => {
        const testPayment: IPayment = {id: 1, name: 'name1', daycost: 10, assign: new Map<number, boolean>().set(10, true)};

        service.createPayment(testPayment).subscribe(payment => {
            expect(payment).toEqual(testPayment);
        });

        const request = httpMock.expectOne('api/payments');

        expect(request.request.method).toBe('POST');

        request.flush(testPayment);
    });

    it('Should update payment: API', () => {
        const testPayment: IPayment = {id: 1, name: 'name1', daycost: 10, assign: new Map<number, boolean>().set(10, true)};

        service.updatePayment(testPayment).subscribe(payment => {
            expect(payment).toEqual(testPayment);
        });

        const request = httpMock.expectOne(`api/payments/${testPayment.id}`);

        expect(request.request.method).toBe('PUT');

        request.flush(testPayment);
    });

    it('Should delete payment: API', () => {
        const testPayment: IPayment = {id: 1, name: 'name1', daycost: 10, assign: new Map<number, boolean>().set(10, true)};

        service.deletePayment(testPayment.id).subscribe(payment => {
            expect(payment).toEqual(testPayment);
        });

        const request = httpMock.expectOne(`api/payments/${testPayment.id}`);

        expect(request.request.method).toBe('DELETE');

        request.flush(testPayment);
    });

});
