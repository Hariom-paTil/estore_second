import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartStoreItem } from '../cart/cart.storeitem';
import { UsersServicesService } from '../../componets/users/users-services.service';
import { DeliveryAddress } from '../../types/cart.type';
import { Order, OrderItem, PastOrder, PastOrderProduct } from '../../types/order.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(
    private httpClient: HttpClient,
    private cartStore: CartStoreItem,
    private userservice: UsersServicesService
  ) { }

  saveOrder(
    deliveryAddress: DeliveryAddress,
    userEmail: string
  ): Observable<any> {
    const url: string = 'http://localhost:5001/orders/add';
    const orderDetails: OrderItem[] = [];
    this.cartStore.cart.products.forEach((product) => {
      const orderItem: OrderItem = {
        productId: product.product.id,
        price: product.product.price,
        qty: product.quantity,
        amount: product.amount,
      };
      orderDetails.push(orderItem);
    });

    const order: Order = {
      userName: deliveryAddress.userName,
      address: deliveryAddress.address,
      city: deliveryAddress.city,
      state: deliveryAddress.state,
      pin: deliveryAddress.pin,
      total: this.cartStore.cart.totalAmount,
      userEmail: userEmail,
      orderDetails: orderDetails,
    };
    return this.httpClient.post(url, order, {
      headers: { authorization: this.userservice.token },
    });
  }
  getOrders(userEmail: string): Observable<PastOrder[]> {
    const url: string = `http://localhost:5001/orders/allorders?userEmail=${userEmail}`;

    return this.httpClient.get<PastOrder[]>(url, {
      headers: { authorization: this.userservice.token },
    });
  }

  getOrderProducts(orderId: number): Observable<PastOrderProduct[]> {
    const url: string = `http://localhost:5001/orders/orderproducts?orderId=${orderId}`;

    return this.httpClient.get<PastOrderProduct[]>(url, {
      headers: { authorization: this.userservice.token },
    });
  }
}
