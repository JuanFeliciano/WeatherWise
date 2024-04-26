import { Component, OnInit } from '@angular/core';
import { ICity } from 'src/app/interfaces/icity';
import { IForecast } from 'src/app/interfaces/iforecast';
import { IWeatherData } from 'src/app/interfaces/iweather-data';
import { WeatherService } from 'src/app/services/weather-service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss'],
})
export class TemperatureComponent implements OnInit {
  cities: ICity[] = [
    { name: 'Jundiaí' },
    { name: 'Jaraguá do Sul' },
    { name: 'São Paulo' },
    { name: 'Joinville' },
    { name: 'Itajai' },
    { name: 'Pomerode' },
    { name: 'São Francisco do Sul' },
    { name: 'Brasília' },
    { name: 'Salvador' },
    { name: 'Rio de Janeiro' },
    { name: 'Guaramirim' },
  ];

  date: Date = new Date();
  dayMonth: number = this.date.getDate();
  year: number = this.date.getFullYear();
  weatherData!: IWeatherData;

  constructor(public weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.city_name =
      localStorage.getItem('selectedCity') || 'São Paulo';
    this.fetchWeather();
  }

  fetchWeather() {
    this.weatherService.fetchWeatherData().subscribe((data) => {
      this.weatherData = data;
    });
  }

  changeCity() {
    localStorage.setItem('selectedCity', this.weatherService.city_name);
    this.fetchWeather();
  }

  getMonthString() {
    return this.date.toLocaleString('default', { month: 'long' }).toUpperCase();
  }

  getWeekString() {
    return this.date
      .toLocaleString('default', { weekday: 'long' })
      .toUpperCase();
  }
}
