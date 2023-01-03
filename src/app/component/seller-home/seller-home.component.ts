import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css'],
})
export class SellerHomeComponent implements OnInit {
  error: string | undefined;
  constructor(private product: ProductService) {}
  ngOnInit(): void {
    this.list();

  }
  productList: any;
  productMessage: undefined | string;
  icon = faTrash;
  iconEdit=faEdit;
  
  deleteProduct(id: number) {
    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = 'Product is deleted';
        this.list();
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
  }

  list() {
    this.product.productList().subscribe((result) => {
      if (result) {
        this.productList = result;
        console.log(result);
      }
    },(error:any)=>{
      //this.error="some issue while making LIST CALL";
      this.error=error
      console.log(error);
    });
  }
}
