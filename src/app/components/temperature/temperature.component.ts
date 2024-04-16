import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather-service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss'],
  providers: [],
})
export class TemperatureComponent implements OnInit {
  constructor(public weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.fetchWeatherData();
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
