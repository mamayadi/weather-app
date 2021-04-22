import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MeteoOneDay } from 'src/app/shared/model/meteoOneDay.model';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MeteoService {
  private key = environment.apiKey;
  constructor(private http: HttpClient) {}

  getMeteo1jour(ville: string): Observable<MeteoOneDay> {
    return this.http.get<MeteoOneDay>(
      `http://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${this.key}`
    );
  }

  getMeteo5jours(ville: string): Observable<any> {
    return this.http
      .get<any>(
        `http://api.openweathermap.org/data/2.5/forecast?q=${ville}&appid=${this.key}`
      )
      .pipe(map((data) => data.list));
  }
}
