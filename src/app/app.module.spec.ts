import {HttpClientModule} from '@angular/common/http';
import {TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppRoutingModule} from './app-routing.module';
import {AppModule} from './app.module';
import {InMemPaymentService} from './mocks/payments.db';

describe('AppModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        BrowserModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemPaymentService, {delay: 100}),
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
      ]
    });
  });

  it('should have an imports', () => {
    const appModule = TestBed.get(AppModule);
    const browserModule = TestBed.get(BrowserModule);
    const httpClientModule = TestBed.get(HttpClientModule);
    const httpClientInMemoryWebApiModule = TestBed.get(HttpClientInMemoryWebApiModule);
    const appRoutingModule = TestBed.get(AppRoutingModule);
    const formsModule = TestBed.get(FormsModule);
    const reactiveFormsModule = TestBed.get(ReactiveFormsModule);

    expect(appModule).toBeDefined();
    expect(browserModule).toBeDefined();
    expect(httpClientModule).toBeDefined();
    expect(httpClientInMemoryWebApiModule).toBeDefined();
    expect(appRoutingModule).toBeDefined();
    expect(formsModule).toBeDefined();
    expect(reactiveFormsModule).toBeDefined();
  });
});
