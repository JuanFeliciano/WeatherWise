import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public icon: string = 'cloudly_day';
  private readonly themeKey = 'preferred-theme';

  constructor() {
    this.loadTheme();
  }

  toggle() {
    const body = document.body;
    const isDarkTheme = body.classList.toggle('dark-theme');
    if (isDarkTheme) {
      this.icon = 'cloudly_night';
      localStorage.setItem(this.themeKey, 'dark');
    } else {
      this.icon = 'cloudly_day';
      localStorage.setItem(this.themeKey, 'light');
    }
  }

  private loadTheme(): void {
    const theme = localStorage.getItem(this.themeKey);
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
      this.icon = 'cloudly_night';
    }
  }
}
