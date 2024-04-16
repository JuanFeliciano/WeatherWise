import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  weatherData: any;

  constructor(private http: HttpClient) {}

  fetchWeatherData() {
    return this.http
      .get<any>(
        'https://api.hgbrasil.com/weather?format=json-cors&key=cabab5a1&woeid=455876'
      )
      .subscribe((data) => {
        this.weatherData = data;
      });
  }
}
