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



@NgModule({
  declarations: [],
  imports: [CommonModule,FontAwesomeModule,HeaderComponent,
    CatnavigationComponent,SidenavgationbarComponent,SharedModule,RouterModule,HomeRoutingModule],
  providers :[CategoryService,CategoriesStoreItem,ProductsStoreItem,ProductsService]
})
export class HomeModule { }
