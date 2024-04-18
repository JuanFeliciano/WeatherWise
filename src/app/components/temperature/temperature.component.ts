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

  constructor(public weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.woeid =
      localStorage.getItem('selectedCity') || '455827';
    this.weatherService.fetchWeatherData();
  }

  changeCity() {
    localStorage.setItem('selectedCity', this.weatherService.woeid);
    this.weatherService.updateCity(this.weatherService.woeid);
  }

  date: Date = new Date();
  getMonthString(date: Date) {
    const monthsList = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const months: string = monthsList[date.getMonth()];
    return months;
  }

  getWeekString(date: Date) {
    const weekString = [
      'Saturday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Sunday',
    ];

    const weeks: string = weekString[date.getDay()];
    return weeks;
  }

  dayMonth = this.date.getDate();
  year = this.date.getFullYear();
}
