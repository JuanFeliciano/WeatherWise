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
  weatherCity: string = this.weatherService.city_name;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe((data) => {
      this.weatherData = data!;
    });
  }

  changeCity(event: Event): void {
    const selectedCity: string = (event.target as HTMLSelectElement).value;
    if (selectedCity) {
      localStorage.setItem('selectedCity', selectedCity);
      this.weatherService.city_name = selectedCity;
      this.weatherService.fetchWeatherData().subscribe();
    }
  }

  getMonthString(): string {
    return this.date.toLocaleString('default', { month: 'long' }).toUpperCase();
  }

  getWeekString(): string {
    return this.date
      .toLocaleString('default', { weekday: 'long' })
      .toUpperCase();
  }

  weatherDescription(): string {
    return this.weatherData.results?.description;
  }
  weatherTemp(): number {
    return this.weatherData.results?.temp;
  }

  dateTotal(): string {
    return `${this.getWeekString()}, ${this.getMonthString()} ${
      this.dayMonth
    }, ${this.year}`;
  }
}
