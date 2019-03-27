import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GridComponent} from './components/grid/grid.component';
import {InMemPaymentService} from './mocks/payments.db';
import {PaymentService} from './services/payment.service';

@NgModule({
  declarations: [AppComponent, GridComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemPaymentService, {delay: 500}),
    AppRoutingModule
  ],
  providers: [
    PaymentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
