import { Component, OnInit } from '@angular/core';
import { IForecast } from 'src/app/interfaces/iforecast';
import { IWeatherData } from 'src/app/interfaces/iweather-data';
import { WeatherService } from 'src/app/services/weather-service';

@Component({
  selector: 'app-clime',
  templateUrl: './clime.component.html',
  styleUrls: ['./clime.component.scss'],
})
export class ClimeComponent implements OnInit {
  weatherData!: IWeatherData;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe((data) => {
      this.weatherData = data!
    });
  }
  
  sliceForecast(): IForecast[] {
    const forecast: IForecast[] = this.weatherData?.results.forecast.slice(
      0,
      5
    );

    return forecast;
  }
}
