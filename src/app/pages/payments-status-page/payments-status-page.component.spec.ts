import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PaymentsStatusPageComponent} from './payments-status-page.component';

describe('PaymentsStatusPageComponent', () => {
  let component: PaymentsStatusPageComponent;
  let fixture: ComponentFixture<PaymentsStatusPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentsStatusPageComponent]
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
