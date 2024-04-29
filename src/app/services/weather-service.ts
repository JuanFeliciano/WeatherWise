import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IWeatherData } from '../interfaces/iweather-data';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private cache: BehaviorSubject<any> = new BehaviorSubject(null);
  public city_name: string = 'São Paulo';
  constructor(private http: HttpClient) {}

  fetchWeatherData(): Observable<any> {
    // if (this.cache.getValue() !== null) {
    //   return new Observable<any>((observer) => {
    //     observer.next(this.cache.getValue());
    //   });
    // }
    return this.http.get<IWeatherData>(
      `https://api.hgbrasil.com/weather?format=json-cors&key=45de0dc2&city_name=${this.city_name}`
    );
    // .pipe(
    //   map((data) => {
    //     this.cache.next(data);
    //     return this.cache.getValue();
    //   })
    // );
  }
}
