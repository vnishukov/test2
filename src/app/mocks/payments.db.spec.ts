import {InMemPaymentService} from './payments.db';

describe('InMemPaymentService', () => {
  let component: InMemPaymentService;

  beforeEach(() => {
    component = new InMemPaymentService();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initially populate in-memory db with 7 payments', () => {
    expect(component.createDb().payments.length).toEqual(7);
  });
});
