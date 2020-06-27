import { Component, Output, Input } from '@angular/core';
import { Products } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  products: Products[] = [
    {
      id: 'i7',
      name: 'IPHONE 7 PLUS',
      description: 'Iphone 7-plus 128GB',
      thumbnail: './assets/img/iphone-7-plus.jpg',
      price: 549.99,
      quantity: 3,
    },
    {
      id: 's8',
      name: 'SAMSUNG GALAXY S8',
      description: 'Samsung Galaxy S8 Plus 256GB',
      thumbnail: './assets/img/ss-galaxy-s8.jpg',
      price: 649.99,
      quantity: 2,
    },
  ];
}
