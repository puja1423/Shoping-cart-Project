import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

// import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  cartData = new EventEmitter<any>()
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

  localAddToCart(data:any) {
    let cartData = [];
    let localCart = localStorage.getItem('localCart');
    if (!localCart) {
      localStorage.setItem('localCart', JSON.stringify([data]));
      this.cartData.emit([data]);
    } else {
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart', JSON.stringify(cartData));
      this.cartData.emit(cartData);
    }
  }

  removeItemFromCart(productId: number) {
    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      let items: any = JSON.parse(cartData);
      items = items.filter((item: any) => productId !== item.id);
      localStorage.setItem('localCart', JSON.stringify(items));
      this.cartData.emit(items);
    }
  }
  addToCart(cartData:any) {
    return this.http.post('http://localhost:3000/cart', cartData);
  }
  getCartList(userId: number) {
    return this.http
      .get('http://localhost:3000/cart?userId=' + userId, {
        observe: 'response',
      })
      .subscribe((result) => {
        if (result && result.body) {
          this.cartData.emit(result.body);
        }
      });
  }

  currentCart() {
    let userStore = localStorage.getItem('user');
    let userData = userStore && JSON.parse(userStore);
    return this.http.get<any[]>('http://localhost:3000/cart?userId=' + userData.id);
  }

  removeToCart(cartId: number) {
    return this.http.delete('http://localhost:3000/cart/' + cartId);
  }

 

}
