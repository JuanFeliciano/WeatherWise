import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  weatherData: any;
  public city_name: string = 'São Paulo';

  constructor(private http: HttpClient) {}

  fetchWeatherData() {
    return this.http
      .get<any>(
        `https://api.hgbrasil.com/weather?format=json-cors&key=cabab5a1&city_name=${this.city_name}`
      )
      .subscribe((data) => {
        this.weatherData = data;
      });
  }

  updateCity(woeid: string) {
    this.city_name = woeid;
    this.fetchWeatherData();
  }
}
