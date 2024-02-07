import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { ProductPageComponent } from './products/pages/product/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
