import { Component } from '@angular/core';
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
  constructor(public categoryStore: CategoriesStoreItem) {}
}
