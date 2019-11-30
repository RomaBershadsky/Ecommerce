import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { Product } from '../classes/product';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items:Product[]=[];
  checkoutForm;
  checkoutTable;
  totalCost: number;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.items = this.cartService.getItems()
   console.log( this.items );
   this.checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
    city: '',
    mail: '',
    state: '',
    cardname:'',
    cvv:'',
    expyear:'',
    expmonth:'',
    cardnumber:'',
    zip: ''
  });
  }

  totalCart() {
    this.totalCost = 0;
    for (let i = 0; i < this.items.length; i++) {
      this.totalCost += parseFloat(this.items[i].price);
    }
    if (this.totalCost != 0) {
      return (this.totalCost + 6.9);
    }
    return this.totalCost;
  }

  removeItem(item) {
    let index = this.items.indexOf(item);

    if (index > -1) {
      this.items.splice(index, 1);
    }
    this.cartService.countItem -=1;
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    this.checkoutForm.reset();
  }
  
  onSubmitTable() {
    //console.warn('Your order has been submitted', customerData);
    this.items = this.cartService.clearCart();
    this.cartService.countItem=0;

  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
  
}
