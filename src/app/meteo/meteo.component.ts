import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MeteoOneDay } from '../shared/model/meteoOneDay.model';
import { MeteoService } from './service/meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss'],
})
export class MeteoComponent implements OnInit {
  cityName = new FormControl(null, [Validators.required]);
  meteoOneDay: MeteoOneDay;
  meteoFiveDay: MeteoOneDay[] = [];
  constructor(
    private snackBar: MatSnackBar,
    private meteoService: MeteoService
  ) {}

  ngOnInit(): void {}

  weatherCity(): void {
    if (this.cityName.valid) {
      this.meteoService.getMeteo1jour(this.cityName.value).subscribe(
        (data) => {
          this.meteoOneDay = data;
        },
        (error: HttpErrorResponse) => {
          this.snackBar.open(error.error.message, 'OK', {
            duration: 5000,
            panelClass: ['mat-toolbar', 'mat-primary'],
          });
        }
      );
      this.meteoService.getMeteo5jours(this.cityName.value).subscribe(
        (data) => {
          this.meteoFiveDay = data;
        },
        (error: HttpErrorResponse) => {
          this.snackBar.open(error.error.message, 'OK', {
            duration: 5000,
            panelClass: ['mat-toolbar', 'mat-primary'],
          });
        }
      );
    }
  }

  getIcon(icon: string): string {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }

  showCard(index: number): boolean {
    return index % 8 === 0;
  }
}
