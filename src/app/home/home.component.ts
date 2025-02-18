import { Component } from '@angular/core';
import { HeaderComponent } from "./componets/header/header.component";
import { CatnavigationComponent } from "./componets/catnavigation/catnavigation.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CatnavigationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
