import { Component } from '@angular/core';
import { HeaderComponent } from "./componets/header/header.component";
import { CatnavigationComponent } from "./componets/catnavigation/catnavigation.component";
import { SidenavgationbarComponent } from "./componets/sidenavgationbar/sidenavgationbar.component";
import { ProductsComponent } from "./componets/products/products.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CatnavigationComponent, SidenavgationbarComponent, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
