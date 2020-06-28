import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Products } from '../product.model';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input('products') products: Products;

  @Output('onUpdateItemsNumber') onUpdateItemsNumber = new EventEmitter;


  updateItemsNumber(productId: string){

    this.onUpdateItemsNumber.emit(productId);

  }
}
