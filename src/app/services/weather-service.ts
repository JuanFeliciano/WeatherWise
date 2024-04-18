import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  weatherData: any;
  public woeid: string = '455827';

  constructor(private http: HttpClient) {}

  fetchWeatherData() {
    return this.http
      .get<any>(
        `https://api.hgbrasil.com/weather?format=json-cors&key=cabab5a1&woeid=${this.woeid}`
      )
      .subscribe((data) => {
        this.weatherData = data;
      });
  }

  updateCity(woeid: string) {
    this.woeid = woeid;
    this.fetchWeatherData();
  }
}
