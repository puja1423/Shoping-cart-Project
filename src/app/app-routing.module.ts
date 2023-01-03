import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './component/home/home.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { SearchComponent } from './component/search/search.component';
import { SellerAddProductComponent } from './component/seller-add-product/seller-add-product.component';
import { SellerAuthComponent } from './component/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './component/seller-home/seller-home.component';
import { SellerUpdateProductComponent } from './component/seller-update-product/seller-update-product.component';
import { UserAuthComponent } from './component/user-auth/user-auth.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: SellerAuthComponent,
    path: 'seller-auth',
  },
  {
    component: SellerHomeComponent,
    path: 'seller-home',
    canActivate: [AuthGuard]
  },
  {
    component: SellerAddProductComponent,
    path: 'seller-add-product',
    canActivate: [AuthGuard]
  },
  {
    component: SellerUpdateProductComponent,
    path: 'seller-update-product/:id',
    canActivate: [AuthGuard]
  },
  {
    component: SearchComponent,
    path: 'search/:query' 
  },
  {
    component:ProductDetailsComponent,
    path:'details/:productId'
  },
  {
    component:UserAuthComponent,
    path:'user-auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
