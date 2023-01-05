import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { priceSummary } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cartData:any;
  priceSummary:priceSummary={
    price: 0,
    delivery: 0,
    total: 0
  }

  constructor(private product: ProductService, private router: Router) { }
  ngOnInit(): void {
    this.loadDetails()
}

loadDetails(){
  this.product.currentCart().subscribe((result) => {
    this.cartData = result;
    console.warn(this.cartData);
    let price = 0;
    result.forEach((item) => {
       
        price = price + (item.price)
    })
    console.log(price)
    this.priceSummary.price = price;
    this.priceSummary.delivery = 100;
    this.priceSummary.total = price + 100 ;
    console.log(this.priceSummary)
  
  })
}

removeToCart(cartId:any){
  cartId && this.cartData && this.product.removeToCart(cartId)
  .subscribe((result)=>{
    this.loadDetails();
  })
}

  
  

}
