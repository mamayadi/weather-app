import { MeteoComponent } from './meteo.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MeteoComponent
   },
];

export const MeteoRoutes = RouterModule.forChild(routes);
