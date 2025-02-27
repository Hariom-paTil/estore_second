import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { Product} from './products.type';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from '../../../shared/componets/ratings/ratings.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RatingsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(productsService: ProductsService) {
    productsService
      .getAllProducts()
      .subscribe((products) => (this.products = products));
  }
}
