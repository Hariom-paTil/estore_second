import { Observable } from "rxjs";
import { StoreItem } from "../../../shared/Storeitem";
import { ProductsService } from "../../componets/products/products.service";
import { Product } from "../../componets/products/products.type";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class ProductsStoreItem extends StoreItem<Product[]> {
  constructor(private productsService: ProductsService) {
    super([]);
  }

  async loadProducts() {
    this.productsService.getAllProducts().subscribe((products) => {
      this.setValue(products);
    });
  }

  get products$(): Observable<Product[]> {
    return this.value$;
  }
}