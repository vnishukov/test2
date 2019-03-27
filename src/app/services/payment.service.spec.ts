import {PaymentService} from './payment.service';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {IPayment} from '../declarations/payment.interface';




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
            {name: 'name1', daycost: 10, assign: [true, false]},
            {name: 'name2', daycost: 2, assign: [false, false]}
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
        const testPayment: IPayment = {name: 'name1', daycost: 10, assign: [true, false]};

        service.createPayment(testPayment).subscribe(payment => {
            expect(payment).toEqual(testPayment);
        });

        const request = httpMock.expectOne('api/payments');

        expect(request.request.method).toBe('POST');

        request.flush(testPayment);
    });

});
