import { Component,EventEmitter,Output,output } from '@angular/core';
import { faSearch,faUserCircle,faHeart,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CategoriesStoreItem } from '../../services/categoryStoreItem';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { SearchKeyword } from '../../types/searchkeywords';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  faSearch = faSearch;
  faUserCircle = faUserCircle;
  faShoppingCart = faShoppingCart;

  @Output()
  searchClicked: EventEmitter<SearchKeyword> =
    new EventEmitter<SearchKeyword>();

  constructor(public categoryStore: CategoriesStoreItem) {}

  onClickSearch(keyword: string, categoryId: string): void {
    this.searchClicked.emit({
      categoryId: parseInt(categoryId),
      keyword: keyword,
    });
  }
}
