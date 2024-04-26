import { Component, OnInit } from '@angular/core';
import { IWeatherData } from 'src/app/interfaces/iweather-data';
import { WeatherService } from 'src/app/services/weather-service';

@Component({
  selector: 'app-clime',
  templateUrl: './clime.component.html',
  styleUrls: ['./clime.component.scss'],
})
export class ClimeComponent implements OnInit {
  weatherData!: IWeatherData 

  constructor(public weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.fetchWeatherData().subscribe((data) => {
      this.weatherData = data;
    });
  }
}
