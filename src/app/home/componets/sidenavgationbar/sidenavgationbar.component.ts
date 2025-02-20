import { Component } from '@angular/core';
import { Category } from '../../types/category.type';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenavgationbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidenavgationbar.component.html',
  styleUrl: './sidenavgationbar.component.scss'
})
export class SidenavgationbarComponent {
  categories: Category[] = [];
  constructor(categoryService: CategoryService) {
    this.categories = categoryService.getAllCategories();
  }

  getCategories(parentCategoryId?: number): Category[] {
    return this.categories.filter(
      (category) => category.parent_category_id === parentCategoryId
    );
  }
}
