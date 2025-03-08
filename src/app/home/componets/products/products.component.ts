import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { Product} from './products.type';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from '../../../shared/componets/ratings/ratings.component';
import { ProductsStoreItem } from '../../services/product/productstoreitem';
import { RouterModule } from '@angular/router';
import { CartStoreItem } from '../../services/cart/cart.storeitem';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RatingsComponent,RouterModule,FontAwesomeModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  faShoppingCart = faShoppingCart;

  constructor(
    public productsStore: ProductsStoreItem,
    private cart: CartStoreItem
  ) {}

  addToCart(product: Product) {
    this.cart.addProduct(product);
  }
  
}
