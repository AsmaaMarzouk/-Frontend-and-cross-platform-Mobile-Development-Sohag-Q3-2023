import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AddToWishlistComponent } from './add-to-wishlist/add-to-wishlist.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',redirectTo:'cart',pathMatch:'full'},
  {path:'cart',component: AddToCartComponent,title:'Add to Cart page'},
  {path:'wishlist',component: AddToWishlistComponent,title:'Add to wishlist page'},
];

@NgModule({
  declarations: [
    AddToCartComponent,
    AddToWishlistComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AddProductsToBuyModule { }
