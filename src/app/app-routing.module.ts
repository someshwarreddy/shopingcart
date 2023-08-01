import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [{
  path: '', component: HomeComponent
},
{
  path: 'home', component: HomeComponent
},
{
  path: 'catagory/:id', component: ProductComponent
},
{
  path: 'product/:id', component: ProductdetailsComponent
},
{
  path: 'login', component: LoginComponent
},
{
  path:'signup', component:SignupComponent
},
{
  path:'cart', component:CartComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
