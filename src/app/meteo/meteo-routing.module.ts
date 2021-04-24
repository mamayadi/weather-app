import { RouterModule, Routes } from '@angular/router';

import { MeteoComponent } from './meteo.component';

const routes: Routes = [
  {
    path: '',
    component: MeteoComponent
   },
   {
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full',
  },

];

export const MeteoRoutes = RouterModule.forChild(routes);
