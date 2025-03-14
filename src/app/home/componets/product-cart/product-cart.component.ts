import { Component, OnDestroy } from '@angular/core';
import { CartItem } from '../../types/cart.type';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CartStoreItem } from '../../services/cart/cart.storeitem';
import { RatingsComponent } from "../../../shared/componets/ratings/ratings.component";
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { loggedInUser } from '../../types/user.type';
import { Subscription } from 'rxjs';
import { UsersServicesService } from '../users/users-services.service';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [RatingsComponent,CommonModule,FontAwesomeModule,ReactiveFormsModule],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss'
})
export class ProductCartComponent  implements OnDestroy,OnDestroy{
  orderForm: FormGroup;
  faTrash = faTrash;
  user: loggedInUser;
  subscriptions: Subscription = new Subscription();

  constructor(
    public cartStore: CartStoreItem,
    private router: Router,
    private fb: FormBuilder,
    private userService: UsersServicesService
  ) {
    this.user = {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      pin: '',
    };
    this.subscriptions.add(
      userService.loggedInUser$.subscribe((loggedUser) => {
        if (loggedUser.firstName) {
          this.user = loggedUser;
        }
      })
    );
  }

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      name: [
        `${this.user.firstName} ${this.user.lastName}`,
        Validators.required,
      ],
      address: [this.user.address, Validators.required],
      city: [this.user.city, Validators.required],
      state: [this.user.state, Validators.required],
      pin: [this.user.pin, Validators.required],
    });
  }

  navigateToHome(): void {
    this.router.navigate(['home/products']);
  }

  updateQuantity($event: any, cartItem: CartItem): void {
    if ($event.target.innerText === '+') {
      this.cartStore.addProduct(cartItem.product);
    } else if ($event.target.innerText === '-') {
      this.cartStore.decreaseProductQuantity(cartItem);
    }
  }

  removeItem(cartItem: CartItem): void {
    this.cartStore.removeProduct(cartItem);
  }

  onSubmit(): void {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
