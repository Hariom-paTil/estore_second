import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductgalleryComponent } from './componets/productgallery/productgallery.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { ProductCartComponent } from './componets/product-cart/product-cart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'products',
        component: ProductgalleryComponent,
      },
      {
        path: 'product/:id',
        component: ProductdetailsComponent
      },
      {
        path: 'product-cart',
        component: ProductCartComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}