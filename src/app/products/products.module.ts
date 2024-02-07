import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { PriceComponent } from './components/price/price.component';


@NgModule({
  declarations: [
    PriceComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
  ],
  exports: [
    PriceComponent,
  ]
})
export class ProductsModule { }
