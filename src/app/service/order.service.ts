import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) { }

  orders = [
    {
       "id":1,
       "name":"order1",
       "price":22,
       "note":'test order'
    }
  ]
 
    
  getOrder() {
    return this.orders;
  }

  createOrder(order: any) {
    var newOrder = this.orders.findIndex((x) => x.id == order.id);
    if(newOrder!=-1){
      return -1
    }

    return this.orders.push(order)
  }

  updateOrder(order: any) {
    var updateOrder = this.orders.findIndex((x) => x.id == order.id);
    return this.orders[updateOrder]=order
    //return this.orders.splice(order.id-1,1,order)
  }

  deleteOrder(order: any) {
    var deletedOrder = this.orders.findIndex((x) => x.id == order.id);
    return this.orders.splice(deletedOrder,1)
    
  }

   

}
