import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { Product} from './products.type';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from '../../../shared/componets/ratings/ratings.component';
import { ProductsStoreItem } from '../../services/product/productstoreitem';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RatingsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  constructor(public productsStore: ProductsStoreItem) {
    console.log(productsStore);
  }
  
}
