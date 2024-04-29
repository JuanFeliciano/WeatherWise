import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IWeatherData } from '../interfaces/iweather-data';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private weather$: BehaviorSubject<IWeatherData | null> =
    new BehaviorSubject<IWeatherData | null>(null);

  public city_name = localStorage.getItem('selectedCity') || 'São Paulo';

  constructor(private http: HttpClient) {}

  getWeatherData(): Observable<IWeatherData | null> {
    return this.weather$.asObservable();
  }

  setWeatherData(weatherData: IWeatherData) {
    this.weather$.next(weatherData);
  }

  fetchWeatherData(): Observable<IWeatherData> {
    return this.http
      .get<IWeatherData>(
        `https://api.hgbrasil.com/weather?format=json-cors&key=437ede73&city_name=${this.city_name}`
      )
      .pipe(
        tap((data) => {
          this.setWeatherData(data);
        })
      );
  }
}
