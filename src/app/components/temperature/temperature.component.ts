import { Component } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss'],
})
export class TemperatureComponent {
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
