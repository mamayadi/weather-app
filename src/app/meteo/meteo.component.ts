import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Meteo } from '../shared/model/meteo.model';
import { MeteoService } from './service/meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss'],
})
export class MeteoComponent implements OnInit {
  cityName = new FormControl(null, [Validators.required]);
  meteoOneDay: Meteo;
  meteoFiveDay: Meteo[] = [];
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
          this.snackBar.open('Ville introuvable!', 'OK', {
            duration: 5000,
            panelClass: ['mat-toolbar', 'mat-primary'],
          });
        }
      );
      this.meteoService
        .getMeteo5jours(this.cityName.value)
        .subscribe((data) => {
          this.meteoFiveDay = data;
        });
    }
  }

  getIcon(icon: string): string {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }

  getFlag(icon: string): string {
    return `http://openweathermap.org/images/flags/${icon.toLowerCase()}.png`;
  }

  showCard(index: number): boolean {
    return index % 8 === 0;
  }

  translateStatus(main: string): string {
    switch (main) {
      case 'Thunderstorm':
        return 'Orage';
      case 'Drizzle':
        return 'Bruine';
      case 'Rain':
        return 'Pluie';
      case 'Snow':
        return 'Neige';
      case 'Mist':
        return 'Brume';
      case 'Smoke':
        return 'Fumée';
      case 'Haze':
        return 'Brume';
      case 'Dust':
        return 'Poussière';
      case 'Fog':
        return 'Brouillard';
      case 'Sand':
        return 'Sable';
      case 'Ash':
        return 'Cendre';
      case 'Squall':
        return 'Bourrasque';
      case 'Tornado':
        return 'Tornade';
      case 'Clouds':
        return 'Des nuages';
      case 'Clear':
        return 'Dégager';
      default:
        return '';
    }
  }
}
