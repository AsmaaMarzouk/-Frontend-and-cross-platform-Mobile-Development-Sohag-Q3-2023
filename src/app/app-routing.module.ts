import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductParentComponent } from './Components/product-parent/product-parent.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';

const routes: Routes = [
  // {path:'',component:MainComponent},// default path
  // first case
  {path:'',redirectTo:'/Home',pathMatch:'full'},// default path
  {path:'Home',component:MainComponent,title:"Home Page"},
  {path:'Products',component:ProductListComponent,title:"Products Page"},
  {path:'ProductsParent',component:ProductParentComponent,title:"Products Parent page"},
  {path:'AboutUs',component:AboutusComponent,title:"About Us page"},
  {path:'**',component:NotFoundPageComponent,title:"Not Found Page"} // wild card path (not found)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
