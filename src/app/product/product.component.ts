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
  invalidField: boolean = false;
  idAlreadyExist: boolean=false;

  constructor(private productService: ProductService) { }



  ngOnInit(): void {
  }

  cancel() {
    this.saveEditComplete.emit(false);
  }
  saveUpdate() {
    if (this.productDetails.id == undefined || this.productDetails.name == undefined || this.productDetails.price == undefined ||
      this.productDetails.id == '' || this.productDetails.name == '' || this.productDetails.price == '') {
      this.invalidField = true
      return
    }
    this.invalidField = false
    if (this.editMode) {
      // this.productService.updateProduct(this.productDetails).subscribe((res:any) =>{
      //   console.log(res);
      //   this.saveEditComplete.emit(true);
      // });
      this.productService.updateOrder(this.productDetails)
      this.saveEditComplete.emit(true);
    } else {
      // this.productService.createProduct(this.productDetails).subscribe((res:any) =>{
      //   console.log(res);
      //   this.saveEditComplete.emit(true);
      // });
      console.log(this.productDetails)
      var aa=this.productService.createOrder(this.productDetails)
      console.log(aa,'aa')
      if(aa==-1){
        this.idAlreadyExist=true
        return
      }
      this.saveEditComplete.emit(true);
    }
  }


}
