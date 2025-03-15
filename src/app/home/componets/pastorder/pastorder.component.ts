import { Component, OnDestroy, OnInit } from '@angular/core';
import { PastOrder, PastOrderProduct } from '../../types/order.type';
import { CommonModule } from '@angular/common';
import { UsersServicesService } from '../users/users-services.service';
import { OrderService } from '../../services/order/order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pastorder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pastorder.component.html',
  styleUrl: './pastorder.component.scss'
})
export class PastorderComponent implements OnInit,OnDestroy {
 
  pastOrderProducts: PastOrderProduct[] = [];
  pastOrder: PastOrder; 
  pastOrders: PastOrder[] = [];
  subscriptions: Subscription = new Subscription();
  constructor(
    private orderService: OrderService,
    private userService: UsersServicesService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.orderService
        .getOrders(this.userService.loggedInUser.email)
        .subscribe((pastOrders) => {
          this.pastOrders = pastOrders;
        })
    );
  }

  selectOrder(event: any) {
    if (Number.parseInt(event.target.value) > 0) {
      this.pastOrder = this.pastOrders.filter(
        (order) => order.orderId === Number.parseInt(event.target.value)
      )[0];
      this.getOrderProducts(this.pastOrder.orderId);
    } else {
      this.pastOrder = <any>undefined;
      this.pastOrderProducts = [];
    }
  }

  getOrderProducts(orderId: number): void {
    this.subscriptions.add(
      this.orderService.getOrderProducts(orderId).subscribe(products => {
        this.pastOrderProducts = products
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
