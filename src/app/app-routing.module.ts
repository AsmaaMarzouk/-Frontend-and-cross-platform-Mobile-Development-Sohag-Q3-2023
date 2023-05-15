import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductParentComponent } from './Components/product-parent/product-parent.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { GroupOfRoutesComponent } from './Components/group-of-routes/group-of-routes.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';

const routes: Routes = [
  // {path:'',component:MainComponent},// default path
  // first case
  { path: '', redirectTo: '/Home', pathMatch: 'full' }, // default path
  { path: 'Home', component: MainComponent, title: 'Home Page' },
  { path: 'Products', component: ProductListComponent, title: 'Products Page' },
  {
    path: 'ProductsParent',
    component: ProductParentComponent,
    title: 'Products Parent page',
  },
  { path: 'AboutUs', component: AboutusComponent, title: 'About Us page' },
  // abc.com/prd/4
  {
    path: 'prd/:productID',
    component: ProductDetailsComponent,
    title: 'Product Details Page',
  },

  {
    path: 'buy',
    loadChildren: () =>
      import(
        'src/app/Components/add-products-to-buy/add-products-to-buy.module'
      ).then((m) => m.AddProductsToBuyModule),
  },

  { path: '**', component: NotFoundPageComponent, title: 'Not Found Page' }, // wild card path (not found)

  // abc.com/products/tables
  // abc.com/products/chairs
  // abc.com/products/tvUnit

  // products => component
  // second
  // {path:'group',component:GroupOfRoutesComponent,children:[
  //   {path:'',redirectTo:'/Home',pathMatch:'full'},// default path
  //   {path:'Home',component:MainComponent,title:"Home Page"},
  //   {path:'Products',component:ProductListComponent,title:"Products Page"},
  //   {path:'ProductsParent',component:ProductParentComponent,title:"Products Parent page"},
  //   {path:'AboutUs',component:AboutusComponent,title:"About Us page"},
  // ]},
  // {path:'**',component:NotFoundPageComponent,title:"Not Found Page"} // wild card path (not found)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
