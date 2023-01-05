import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { SellerAuthComponent } from './component/seller-auth/seller-auth.component';
import { FooterComponent } from './component/footer/footer.component';
import { SellerAddProductComponent } from './component/seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './component/seller-update-product/seller-update-product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerHomeComponent } from './component/seller-home/seller-home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { SearchComponent } from './component/search/search.component';
import { UserAuthComponent } from './component/user-auth/user-auth.component';
import { CartPageComponent } from './cart-page/cart-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerAuthComponent,
    FooterComponent,
    SellerHomeComponent,
    SellerAddProductComponent,
    SellerUpdateProductComponent,
    ProductDetailsComponent,
    SearchComponent,
    UserAuthComponent,
    CartPageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
