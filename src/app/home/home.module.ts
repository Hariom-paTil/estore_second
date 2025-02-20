import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './componets/header/header.component';
import { CatnavigationComponent } from './componets/catnavigation/catnavigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidenavgationbarComponent } from './componets/sidenavgationbar/sidenavgationbar.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    CatnavigationComponent,
    FontAwesomeModule,SidenavgationbarComponent
  ]
})
export class HomeModule { }
