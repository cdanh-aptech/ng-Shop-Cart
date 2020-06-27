import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('subTotal') subTotal: number;
  @Input('tax') tax: number;
  @Input('total') total: number;

}
