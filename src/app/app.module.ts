import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { BillComponent } from './bill/bill.component';
import { CartStore } from './shared/cart.store';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    BillComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CartStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
