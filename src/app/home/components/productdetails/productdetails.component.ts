import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../componets/products/products.type';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../componets/products/products.service';
import { RatingsComponent } from "../../../shared/componets/ratings/ratings.component";
import { ProductsStoreItem } from '../../services/product/productstoreitem';
import { StoreItem } from '../../../shared/Storeitem';
import { CurrencyPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [RatingsComponent,CommonModule],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss'
})
export class ProductdetailsComponent implements OnInit,OnDestroy{
  product: Product;
  subscriptions: Subscription = new Subscription();
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    const id: number = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.subscriptions.add(
      this.productsService.getProduct(id).subscribe((product) => {
        this.product = product[0];
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
