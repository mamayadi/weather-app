import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'book',
    loadChildren: () =>
      import('./meteo/meteo.module').then((m) => m.MeteoModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./meteo/meteo.module').then((m) => m.MeteoModule),
  },
  {
    path: 'meteo',
    loadChildren: () =>
      import('./meteo/meteo.module').then((m) => m.MeteoModule),
  },
  {
    path: '',
    redirectTo: 'meteo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
