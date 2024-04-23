import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public icon: string = 'cloudly_day';
  public logo: string = 'MovtechLogo';
  private readonly themeKey: string = 'preferred-theme';

  constructor() {
    this.loadTheme();
  }

  public toggle() {
    const isDarkTheme = document.body.classList.toggle('dark-theme');

    if (isDarkTheme) {
      this.icon = 'cloudly_night';
      this.logo = 'MovtechLogoWhite';
      localStorage.setItem(this.themeKey, 'dark');
    } else {
      this.icon = 'cloudly_day';
      this.logo = 'MovtechLogo';
      localStorage.setItem(this.themeKey, 'light');
    }
  }

  private loadTheme() {
    const theme: string | null = localStorage.getItem(this.themeKey);
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
      this.icon = 'cloudly_night';
      this.logo = 'MovtechLogoWhite';
    }
  }
}
