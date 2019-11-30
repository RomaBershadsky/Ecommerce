import { Component, OnInit } from '@angular/core';
import{CartService}from '../services/cart.service';
import { Product } from '../classes/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public ser:CartService){
    this.ser.countItem;
  }

  
  ngOnInit() {
  }

}
