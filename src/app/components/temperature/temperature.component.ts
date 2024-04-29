import { Component, OnInit } from '@angular/core';
import { ICity } from 'src/app/interfaces/icity';
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

  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe((data) => {
      if (data) {
        this.weatherData = data;
      } else {
        this.fetchWeatherAndUpdate();
      }
    });
  }

  changeCity(event: Event) {
    const selectedCity = (event.target as HTMLSelectElement).value;
    if (selectedCity) {
      localStorage.setItem('selectedCity', selectedCity);
      this.weatherService.city_name = selectedCity;
      this.fetchWeatherAndUpdate();
    }
  }

  private fetchWeatherAndUpdate() {
    this.weatherService.fetchWeatherData().subscribe((data) => {
      this.weatherData = data;
    });
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
