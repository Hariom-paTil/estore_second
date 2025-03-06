import { Component } from '@angular/core';
import { ProductsComponent } from "../products/products.component";
import { ProductsStoreItem } from '../../services/product/productstoreitem';
import { SidenavgationbarComponent } from '../sidenavgationbar/sidenavgationbar.component';

@Component({
  selector: 'app-productgallery',
  standalone: true,
  imports: [ProductsComponent,SidenavgationbarComponent],
  templateUrl: './productgallery.component.html',
  styleUrl: './productgallery.component.scss'
})
export class ProductgalleryComponent {
 constructor(private productsStoreItem: ProductsStoreItem){
 }
 
 onSelectSubCategory(subCategoryId: number): void {
  this.productsStoreItem.loadProducts('subcategoryid=' + subCategoryId);
}
}
