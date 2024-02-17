import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  isSidePanelVisible: boolean = false;

  productObj: any = {
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createDate": new Date(),
    "deliveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": ""
  }

  openSidePannel(){
    this.isSidePanelVisible = true;
  }

  closeSidePannel(){
    this.isSidePanelVisible = false;
  }
}
