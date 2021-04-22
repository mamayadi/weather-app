import { CommonModule } from '@angular/common';
import { MeteoComponent } from './meteo.component';
import { MeteoRoutes } from './meteo-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, MeteoRoutes],
  declarations: [MeteoComponent],
})
export class MeteoModule {}
