import { Component, Output, Input } from '@angular/core';
import { Products } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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

  subTotal: number;
  tax: number = 100.01;
  total: number;

  itemsNumber: number;

  constructor() {
    // Calculating SubTotal
    let subPrice: number = 0;
    let itemsNum: number = 0;
    for (const product of this.products) {
      subPrice += product.quantity * product.price;
      itemsNum += product.quantity;
    }
    this.subTotal = subPrice;
    // this.tax = 100.01;
    this.total = this.subTotal + this.tax;
    this.itemsNumber = itemsNum;
  }

  onUpdateItemsNumber(productId: string) {
    // alert('Product id: ' + productId);
    // alert('Item Number: ' + event.target.value);
    // console.log(event.target.value);
    const index = this.products.findIndex(
      (product) => product.id === productId
    );
    if (index != -1) {
      let itemsNum: number = 0;
      let subPrice: number = 0;
      let quantity: number = Number(event.target.value);
      this.products[index].quantity = quantity;
      for (const product of this.products) {
        subPrice += product.quantity * product.price;
        itemsNum += product.quantity;
      }
      this.subTotal = subPrice;
      // this.tax = 100.01;
      this.total = Number(this.subTotal + this.tax);
      this.itemsNumber = itemsNum;
    }
  }

  onRemoveProduct(productId: string) {
    // alert('ProductID ' + productId);
    const index = this.products.findIndex(
      (product) => product.id === productId
    );
    if (index != -1) {
      this.products.splice(index, 1);
    }
    // Delete Product
    let itemsNum: number = 0;
    let subPrice: number = 0;
    for (const product of this.products) {
      subPrice += product.quantity * product.price;
      itemsNum += product.quantity;
    }
    this.subTotal = subPrice;
    this.total = Number(this.subTotal + this.tax);
    this.itemsNumber = itemsNum;
  }

  updateProducts() {
    let itemsNum: number = 0;
    let subPrice: number = 0;
    for (const product of this.products) {
      subPrice += product.quantity * product.price;
      itemsNum += product.quantity;
    }
    this.subTotal = subPrice;
    this.total = Number(this.subTotal + this.tax);
    this.itemsNumber = itemsNum;
  }
}
