import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Input() orderDetails: any;
  @Input() editMode: boolean;
  @Output() saveEditComplete: EventEmitter<any> = new EventEmitter();
  idAlreadyExist: boolean=false;

  constructor(private orderService: OrderService) { }



  ngOnInit(): void {
  }

  cancel() {
    this.saveEditComplete.emit(false);
  }
  saveUpdate() {
    if (this.editMode) {
      this.orderService.updateOrder(this.orderDetails)
      this.saveEditComplete.emit(true);
    } else {
      console.log(this.orderDetails)
      var res=this.orderService.createOrder(this.orderDetails)
      if(res==-1){
        this.idAlreadyExist=true
        return
      }
      this.saveEditComplete.emit(true);
    }
  }


}
