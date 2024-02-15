import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  isSidePanelVisible: boolean = false;

  openSidePannel(){
    this.isSidePanelVisible = true;
  }

  closeSidePannel(){
    this.isSidePanelVisible = false;
  }
}
