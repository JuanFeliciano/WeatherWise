import { Component, OnInit } from '@angular/core';
import { ICity } from 'src/app/interfaces/icity';
import { WeatherService } from 'src/app/services/weather-service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss'],
})
export class TemperatureComponent implements OnInit {
  cities: ICity[] = [
    { woeid: '455876', name: 'Jundiaí' },
    { woeid: '456283', name: 'Jaraguá do Sul' },
    { woeid: '455827', name: 'São Paulo' },
    { woeid: '455873', name: 'Joinville' },
    { woeid: '90200648', name: 'Florianópolis' },
    { woeid: '455870', name: 'Itajai' },
    { woeid: '460532', name: 'Pomerode' },
    { woeid: '456516', name: 'São Francisco do Sul' },
    { woeid: '455819', name: 'Brasília' },
    { woeid: '455826', name: 'Salvador' },
    { woeid: '455825', name: 'Rio de Janeiro' },
  ];

  date: Date = new Date();
  dayMonth: number = this.date.getDate();
  year: number = this.date.getFullYear();

  constructor(public weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.city_name =
      localStorage.getItem('selectedCity') || 'São Paulo';
    this.weatherService.fetchWeatherData();
  }

  changeCity() {
    localStorage.setItem('selectedCity', this.weatherService.city_name);
    this.weatherService.updateCity();
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
