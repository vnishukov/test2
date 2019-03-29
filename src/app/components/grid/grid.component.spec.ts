import {EventEmitter} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import IPayment from 'src/app/declarations/payment.interface';
import {GridComponent} from './grid.component';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;
  let paymentsStub: IPayment[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GridComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
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
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a payments list', () => {
    expect(component.payments).toBeDefined();
    expect(component.payments).toEqual(jasmine.any(Array));
  });

  it('should have a months list', () => {
    expect(component.months).toBeDefined();
    expect(component.months).toEqual(jasmine.any(Array));
  });

  it('should have an emitter to update item', () => {
    expect(component.update).toBeDefined();
    expect(component.update).toEqual(jasmine.any(EventEmitter));
  });

  it('should have an emitter to remove item', () => {
    expect(component.remove).toBeDefined();
    expect(component.remove).toEqual(jasmine.any(EventEmitter));
  });

  it('should emit event to remove item', () => {
    spyOn(component.remove, 'emit');
    component.onRemove(paymentsStub[0]);
    expect(component.remove.emit).toHaveBeenCalledWith(paymentsStub[0]);
  });

  it('should set proper assign to items and emit updated item', () => {
    const eventStub = {target: {checked: true}};
    const payment = paymentsStub[1];
    spyOn(component.update, 'emit');
    component.setAssignment(payment, 3, eventStub);
    expect(payment.assign[3]).toBeTruthy();
    expect(component.update.emit).toHaveBeenCalledWith(payment);
  });

  it('should calculate correct amount of selected assigns', () => {
    const eventStub = {target: {checked: true}};
    const payment1 = paymentsStub[0];
    const payment2 = paymentsStub[1];
    component.payments = paymentsStub;
    component.setAssignment(payment1, 2, eventStub);
    component.setAssignment(payment1, 4, eventStub);
    component.setAssignment(payment2, 8, eventStub);
    component.setAssignment(payment2, 10, eventStub);
    expect(component.getAmount()).toEqual(1820);
  });
});
