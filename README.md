# Weather Forecast Application

## Overview

This project is a weather forecast application built with Angular 15. It fetches real-time weather data from the HG Brasil Weather API and presents it in a user-friendly interface. The application allows users to select different cities to view current weather conditions and forecasts for the next few days. Additionally, it includes a theme toggle feature for switching between light and dark modes.

## Features

- **Real-time Weather Data**: The application retrieves up-to-date weather information, including temperature, weather conditions, and forecasts, from an external API.
- **City Selection**: Users can choose from a predefined list of cities to view specific weather data for their selected location.
- **Weather Forecast**: Displays a 5-day weather forecast with details such as date, weather condition icon, temperature range, and rain probability.
- **Responsive Design**: The application is designed to be responsive and works well on both desktop and mobile devices.
- **Theme Toggle**: Users can switch between light and dark themes, with their preference being saved in local storage.

## How It Works

1. **Fetching Weather Data**: The application uses the HG Brasil Weather API to fetch weather data based on the selected city. The data includes current temperature, weather description, and a forecast for the next five days.
2. **City Selection**: Users can select a city from a dropdown list. The selected city is stored in local storage and used to fetch and display relevant weather data.
3. **Displaying Weather Data**: The weather data is displayed in three main components:
   - **Temperature Component**: Shows the current temperature and weather description for the selected city.
   - **Clime Component**: Displays a 5-day forecast with details on date, weather conditions, temperature range, and rain probability.
   - **Header Component**: Contains the application logo and a button to toggle between light and dark themes.
4. **Theme Toggle**: Users can switch between light and dark themes. The selected theme is saved in local storage and applied automatically on subsequent visits.

## Installation

To run the application locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/weather-forecast-app.git
2. **Navigate to the project directory**:
   ```bash
   cd weather-forecast-app
3. **Install dependencies**:
   ```bash
   npm install
4. **Run the application**:
   ```bash
   ng serve
The application will be available at [http://localhost:4200](http://localhost:4200).

## Usage

- Select a city from the dropdown menu to view the weather forecast for that location.
- Use the theme toggle button in the header to switch between light and dark themes.

## Technologies Used

- **Angular 15**: Framework for building the application.
- **TypeScript**: Programming language used for development.
- **HG Brasil Weather API**: External API for fetching real-time weather data.
