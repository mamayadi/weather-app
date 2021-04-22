import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
  {
    path: 'add',
    component: AddProductComponent,
  },
  {
    path: 'edit/:id',
    component: EditProductComponent,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

export const ProductRoutes = RouterModule.forChild(routes);
