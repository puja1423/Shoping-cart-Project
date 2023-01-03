import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

// import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  addProduct(data: any) {
    return this.http.post('http://localhost:3000/product', data);
  }
  productList():Observable<any>{
    return this.http.get('http://localhost:3000/product')
    .pipe(catchError(this.handleError))
  }
  handleError(error:any){
    return throwError(error.message || "server error")
  }
  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/product/${id}`);
  }
  getProduct(id: string) {
    return this.http.get(`http://localhost:3000/product/${id}`);
  }

  updateProduct(product: any) {
    return this.http.put(
      `http://localhost:3000/product/${product.id}`,
      product
    );
  }
  popularProduct() {
    return this.http.get('http://localhost:3000/product?_limit=3');
  }
  
  trendyProducts() {
    return this.http.get('http://localhost:3000/product?_limit=5');
  }

  searchProduct(query: string) {
    return this.http.get(`http://localhost:3000/product?q=${query}`);
  }
  
}
