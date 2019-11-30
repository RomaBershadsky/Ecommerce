import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../classes/product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  product: Product;
  catId: string;


  Products: Product[];
  // tempProducts: Product[];
  constructor(private route: ActivatedRoute,
    private cartService: CartService) {


  }

  addToCart(product: Product) {
    console.log('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }


  ngOnInit() {
    // console.log(this.tempProducts)
    this.route.params.subscribe(params => {
      if (params.catId != null) {
        this.catId = params.catId;
        this.Products = this.cartService.Products.filter(d => d.category == this.catId)
      } else{this.Products=this.cartService.Products}
    })

  }
}