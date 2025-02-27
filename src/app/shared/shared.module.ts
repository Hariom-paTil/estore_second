import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 import { RatingsComponent } from './componets/ratings/ratings.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RatingsComponent,
  ],
  exports:[],
  
})
export class SharedModule { }
