import { Component, OnInit } from '@angular/core';
import { IForecast } from 'src/app/interfaces/iforecast';
import { WeatherService } from 'src/app/services/weather-service';

@Component({
  selector: 'app-clime',
  templateUrl: './clime.component.html',
  styleUrls: ['./clime.component.scss'],
})
export class ClimeComponent implements OnInit {
  constructor(public weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.fetchWeatherData();
  }
}
