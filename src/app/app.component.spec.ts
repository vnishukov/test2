import {async, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormComponent} from './components/form/form.component';
import {GridComponent} from './components/grid/grid.component';
import {PaymentsStatusPageComponent} from './pages/payments-status-page/payments-status-page.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, PaymentsStatusPageComponent, FormComponent, GridComponent],
      imports: [AppRoutingModule, FormsModule, ReactiveFormsModule]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
