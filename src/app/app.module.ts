import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './admin/products/products.component';
import { LoginComponent } from './admin/login/login.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { OrderComponent } from './admin/order/order.component';
import { CustomerComponent } from './admin/customer/customer.component';
import { CartComponent } from './admin/cart/cart.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { LandingComponent } from './website/landing/landing.component';
import { CategoryProductsComponent } from './website/category-products/category-products.component';
import { CustomerCartComponent } from './website/customer-cart/customer-cart.component';
import { CheckoutComponent } from './website/checkout/checkout.component';
import { CustomerOrdersComponent } from './website/customer-orders/customer-orders.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent,
    LayoutComponent,
    OrderComponent,
    CustomerComponent,
    CartComponent,
    CategoriesComponent,
    LandingComponent,
    CategoryProductsComponent,
    CustomerCartComponent,
    CheckoutComponent,
    CustomerOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
