import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './componets/header/header.component';
import { CatnavigationComponent } from './componets/catnavigation/catnavigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidenavgationbarComponent } from './componets/sidenavgationbar/sidenavgationbar.component';
import { SharedModule } from '../shared/shared.module';
import { RatingsComponent } from '../shared/componets/ratings/ratings.component';
import { ProductsStoreItem } from './services/product/productstoreitem';
import { CategoriesStoreItem } from './services/categoryStoreItem';
import { CategoryService } from './services/category.service';
import { ProductsService } from './componets/products/products.service';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home_route_module';
import { CartStoreItem } from './services/cart/cart.storeitem';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersServicesService } from './componets/users/users-services.service';
import { OrderService } from './services/order/order.service';



@NgModule({
  declarations: [],
  imports: [CommonModule,FontAwesomeModule,HeaderComponent,
    CatnavigationComponent,SidenavgationbarComponent,SharedModule,RouterModule,HomeRoutingModule,ReactiveFormsModule],
  providers :[CategoryService,CategoriesStoreItem,ProductsStoreItem,ProductsService,CartStoreItem,UsersServicesService,OrderService]
})
export class HomeModule { }
