import {Component, OnInit} from '@angular/core';
import {PaymentService} from '../../services/payment.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor(private paymentService: PaymentService) {}

  ngOnInit() {
    this.paymentService.getPayments().subscribe((RESULTS) => {
      debugger;
    });
  }

}
