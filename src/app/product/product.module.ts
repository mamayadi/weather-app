import { AddProductComponent } from './add-product/add-product.component';
import { CommonModule } from '@angular/common';
import { EditProductComponent } from './edit-product/edit-product.component';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { ProductRoutes } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, ProductRoutes],
  declarations: [ProductComponent, AddProductComponent, EditProductComponent],
})
export class ProductModule {}
