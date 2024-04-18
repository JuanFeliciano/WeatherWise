import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public icon: string = 'cloudly_day';
  private readonly themeKey = 'preferred-theme';

  constructor() {
    this.loadTheme();
  }

  public toggle() {
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

  private loadTheme() {
    const theme = localStorage.getItem(this.themeKey);
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
      this.icon = 'cloudly_night';
    }
  }
}
