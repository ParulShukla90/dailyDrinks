import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() productDetails: any;
  @Input() editMode: boolean;
  @Output() saveEditComplete: EventEmitter<any> = new EventEmitter();
  idAlreadyExist: boolean=false;

  constructor(private productService: ProductService) { }



  ngOnInit(): void {
  }

  cancel() {
    this.saveEditComplete.emit(false);
  }
  saveUpdate() {
    if (this.editMode) {
      this.productService.updateOrder(this.productDetails)
      this.saveEditComplete.emit(true);
    } else {
      console.log(this.productDetails)
      var res=this.productService.createOrder(this.productDetails)
      if(res==-1){
        this.idAlreadyExist=true
        return
      }
      this.saveEditComplete.emit(true);
    }
  }


}
