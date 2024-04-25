import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IWeatherData } from '../interfaces/iweather-data';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  weatherData!: IWeatherData;
  public city_name: string = 'São Paulo';

  constructor(private http: HttpClient) {}

  fetchWeatherData() {
    return this.http
      .get<IWeatherData>(
        `https://api.hgbrasil.com/weather?format=json-cors&key=783861a3&city_name=${this.city_name}`
      )
      .subscribe((data) => {
        this.weatherData = data;
      });
  }
}
