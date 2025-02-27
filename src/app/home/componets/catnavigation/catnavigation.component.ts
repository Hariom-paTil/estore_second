import { Component, EventEmitter, Output } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../types/category.type';
import { CommonModule } from '@angular/common';
import { CategoriesStoreItem } from '../../services/categoryStoreItem';

@Component({
  selector: 'app-catnavigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catnavigation.component.html',
  styleUrl: './catnavigation.component.scss'
})
export class CatnavigationComponent {
  @Output()
  categoryClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor(public categoryStore: CategoriesStoreItem) {}

  onCategoryClick(category: Category): void {
    this.categoryClicked.emit(category.id);
  }
}
