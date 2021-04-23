import { RouterModule, Routes } from '@angular/router';

import { BookComponent } from './book.component';
import { BookInfoComponent } from './book-info/book-info.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
  },
  {
    path: 'info/:id',
    component: BookInfoComponent,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

export const BookRoutingRoutes = RouterModule.forChild(routes);
