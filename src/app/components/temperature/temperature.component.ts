import { Component, OnInit } from '@angular/core';
import { ICity } from 'src/app/interfaces/icity';
import { WeatherService } from 'src/app/services/weather-service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss'],
})
export class TemperatureComponent implements OnInit {
  selectCity: string = '455876';
  cities: ICity[] = [
    { name: 'Jaraguá do Sul', woeid: '456283' },
    { name: 'São Paulo', woeid: '455827' },
    { name: 'Joinville', woeid: '455873' },
    { name: 'Florianópolis', woeid: '90200648' },
    { name: 'Itajai', woeid: '455870' },
    { name: 'Pomerode', woeid: '460532' },
    { name: 'São Francisco do Sul', woeid: '456516' },
    { name: 'Brasília', woeid: '455819' },
    { name: 'Salvador', woeid: '455826' },
    { name: 'Rio de Janeiro', woeid: '455825' },
  ];

  constructor(public weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.fetchWeatherData();
  }

  changeCity() {
    this.weatherService.updateCity(this.selectCity);
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
