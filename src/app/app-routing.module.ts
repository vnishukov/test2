import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PaymentsStatusPageComponent} from './pages/payments-status-page/payments-status-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/paymets-status', pathMatch: 'full'},
  {path: 'paymets-status', component: PaymentsStatusPageComponent},
  {path: '**', redirectTo: '/paymets-status', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
