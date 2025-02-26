import { Component } from '@angular/core';
import { faSearch,faUserCircle,faHeart,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CategoriesStoreItem } from '../../services/categoryStoreItem';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 faSearch = faSearch;
 faUserCircle=faUserCircle;
 faShoppingCart=faShoppingCart;

 constructor (public categoryStore: CategoriesStoreItem)
 {

 }
}
