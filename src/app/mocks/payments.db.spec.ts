import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {InMemPaymentService} from './payments.db';

describe('InMemPaymentService', () => {
  let component: InMemPaymentService;
  let fixture: ComponentFixture<InMemPaymentService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InMemPaymentService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InMemPaymentService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
