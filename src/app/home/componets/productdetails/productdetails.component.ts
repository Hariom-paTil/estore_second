import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../products/products.type';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products/products.service';
import { RatingsComponent } from "../../../shared/componets/ratings/ratings.component";
import { ProductsStoreItem } from '../../services/product/productstoreitem';
import { StoreItem } from '../../../shared/Storeitem';
import { CurrencyPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { faIcons, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartStoreItem } from '../../services/cart/cart.storeitem';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [RatingsComponent,CommonModule,FontAwesomeModule],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss'
})
export class ProductdetailsComponent implements OnInit,OnDestroy{
  product: Product;
  subscriptions: Subscription = new Subscription();
  faShoppingCart = faShoppingCart;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private cart: CartStoreItem
  ) {}

  ngOnInit(): void {
    const id: number = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.subscriptions.add(
      this.productsService.getProduct(id).subscribe((product) => {
        this.product = product[0];
      })
    );
  }

  addToCart() {
    this.cart.addProduct(this.product);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
