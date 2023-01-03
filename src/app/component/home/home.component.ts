import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  popularProduct:any;
  trendyProducts:any;

  constructor(private product:ProductService){}

  ngOnInit(): void {
    this.product.popularProduct().subscribe((data:any)=>{
      this.popularProduct=data;
  })
  this.product.trendyProducts().subscribe((data)=>{
    this.trendyProducts=data;
  })
}
}

  
