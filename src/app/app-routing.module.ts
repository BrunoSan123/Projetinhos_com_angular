import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductsUpdateComponent } from './components/product/products-update/products-update.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {ProductsCrudComponent} from './views/products-crud/products-crud.component'

const routes: Routes = [
  {
  path:"",
  component: HomeComponent
},
  {
    path:"products",
    component:ProductsCrudComponent
  },
  {
    path:"products/create",
    component:ProductCreateComponent
  },

  {
    path:"products/update/:id",
    component: ProductsUpdateComponent
  },

  {
    path:"products/delete/:id",
    component:ProductDeleteComponent

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
