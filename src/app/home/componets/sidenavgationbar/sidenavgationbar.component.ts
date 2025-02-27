import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Category } from '../../types/category.type';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { CategoriesStoreItem } from '../../services/categoryStoreItem';


@Component({
  selector: 'app-sidenavgationbar',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './sidenavgationbar.component.html',
  styleUrl: './sidenavgationbar.component.scss'
})
export class SidenavgationbarComponent implements OnDestroy {
  @Output()
  subCategoryClicked: EventEmitter<number> = new EventEmitter<number>();
  categories: Category[] = [];
  subscriptions: Subscription = new Subscription();

  constructor(categoryStore: CategoriesStoreItem) {
    this.subscriptions.add(
      categoryStore.categories$.subscribe((categories) => {
        this.categories = categories;
      })
    );
  }

  getCategories(parentCategoryId?: number): Category[] {
    return this.categories.filter((category) =>
      parentCategoryId
        ? category.parent_category_id === parentCategoryId
        : category.parent_category_id === null
    );
  }

  onSubCategoryClick(subCategory: Category): void {
    this.subCategoryClicked.emit(subCategory.id);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
