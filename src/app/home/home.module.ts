import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './componets/header/header.component';
import { CatnavigationComponent } from './componets/catnavigation/catnavigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    CatnavigationComponent,
    FontAwesomeModule
  ]
})
export class HomeModule { }
