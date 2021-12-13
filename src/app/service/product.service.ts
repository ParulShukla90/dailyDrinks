import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  res = [
    {
       "id":1,
       "name":"order1",
       "price":22,
       "note":'testorder'
    }
  ]
 
    
  getOrder() {
    return this.res;
  }

  createOrder(product: any) {
    var newOrder = this.res.findIndex((x) => x.id == product.id);
    if(newOrder!=-1){
      return -1
    }

    return this.res.push(product)
  }

  updateOrder(product: any) {
    var updateOrder = this.res.findIndex((x) => x.id == product.id);
    return this.res[updateOrder]=product
    //return this.res.splice(product.id-1,1,product)
  }

  deleteOrder(product: any) {
    var deletedOrder = this.res.findIndex((x) => x.id == product.id);
    return this.res.splice(deletedOrder,1)
    
  }

   

}
