import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meteo } from 'src/app/shared/model/meteo.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MeteoService {
  private key = environment.apiKey;
  private url = environment.weatherUrl;
  constructor(private http: HttpClient) {}

  getMeteo1jour(ville: string): Observable<Meteo> {
    return this.http.get<Meteo>(
      `${this.url}/weather?q=${ville}&appid=${this.key}`
    );
  }

  getMeteo5jours(ville: string): Observable<Meteo[]> {
    return this.http
      .get<any>(`${this.url}/forecast?q=${ville}&appid=${this.key}`)
      .pipe(map((data) => data.list));
  }
}
