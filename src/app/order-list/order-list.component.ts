import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orders: any[];
  selectedOrder: any= {};
  editMode: boolean = false;
  editOperation: boolean = false;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrder();
  }
  getOrder() {
    this.orders = [];
    this.orders = this.orderService.getOrder()
  }

  createOrder() {
    this.editOperation = true;
    this.editMode = false;
    this.selectedOrder = {};
  }

  editOrder(order: any) {
    this.editMode = true;
    this.selectedOrder = {...order};
    this.editOperation = true;
  }

  deleteOrder(orderId: any) {
    let order = {'id': orderId};
    this.orderService.deleteOrder(order);
    this.getOrder();
  }

  saveUpdateOrder(event: any) {
    this.editOperation = false;
    if(event) {
      this.getOrder();
    }    
  }



}
