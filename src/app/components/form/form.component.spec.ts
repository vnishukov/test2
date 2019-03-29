import {EventEmitter} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AbstractControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormComponent} from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [FormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form', () => {
    expect(component.operationForm).toBeDefined();
  });

  it('should have an emitter to submit the form', () => {
    expect(component.submit).toBeDefined();
    expect(component.submit).toEqual(jasmine.any(EventEmitter));
  });

  it('should have FormControl for a `paymentName` form field', () => {
    expect(component.paymentName).toEqual(jasmine.any(AbstractControl));
  });

  it('should have FormControl for a `paymentDayCost` form field', () => {
    expect(component.paymentDayCost).toEqual(jasmine.any(AbstractControl));
  });

  it('should not submit the form if it`s not valid', () => {
    spyOn(component.submit, 'emit');
    component.paymentName.setValue('');
    component.paymentDayCost.setValue(-5);
    component.onSubmit();
    expect(component.submit.emit).not.toHaveBeenCalled();
  });

  it('should submit the form if it`s valid', () => {
    spyOn(component.submit, 'emit');
    component.paymentName.setValue('Test value');
    component.paymentDayCost.setValue(22);
    component.onSubmit();
    expect(component.submit.emit).toHaveBeenCalledWith({name: 'Test value', daycost: 22});
  });

  it('should reset the form after submit', () => {
    spyOn(component.submit, 'emit');
    component.paymentName.setValue('Test value');
    component.paymentDayCost.setValue(22);
    component.onSubmit();
    expect(component.paymentName.value).toEqual(null);
    expect(component.paymentDayCost.value).toEqual(null);
  });
});
