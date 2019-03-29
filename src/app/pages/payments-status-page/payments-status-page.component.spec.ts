import {HttpClientTestingModule} from '@angular/common/http/testing';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormComponent} from 'src/app/components/form/form.component';
import {GridComponent} from 'src/app/components/grid/grid.component';
import {PaymentService} from 'src/app/services/payment.service';
import {PaymentsStatusPageComponent} from './payments-status-page.component';

describe('PaymentsStatusPageComponent', () => {
  let component: PaymentsStatusPageComponent;
  let fixture: ComponentFixture<PaymentsStatusPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule],
      declarations: [PaymentsStatusPageComponent, FormComponent, GridComponent],
      providers: [PaymentService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsStatusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
