import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any[];
  selectedProduct: any= {};
  editMode: boolean = false;
  editOperation: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getOrder();
  }
  getOrder() {
    this.products = [];
    this.products = this.productService.getOrder()
  }

  createOrder() {
    this.editOperation = true;
    this.editMode = false;
    this.selectedProduct = {};
  }

  editOrder(product: any) {
    this.editMode = true;
    this.selectedProduct = {...product};
    this.editOperation = true;
  }

  deleteOrder(productId: any) {
    let product = {'id': productId};
    this.productService.deleteOrder(product);
    this.getOrder();
  }

  saveUpdateProduct(event: any) {
    this.editOperation = false;
    if(event) {
      this.getOrder();
    }    
  }



}
