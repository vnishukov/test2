import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormComponent} from './components/form/form.component';
import {GridComponent} from './components/grid/grid.component';
import {InMemPaymentService} from './mocks/payments.db';
import {PaymentsStatusPageComponent} from './pages/payments-status-page/payments-status-page.component';
import {PaymentService} from './services/payment.service';

@NgModule({
  declarations: [AppComponent, GridComponent, PaymentsStatusPageComponent, FormComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemPaymentService, {delay: 50}),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
