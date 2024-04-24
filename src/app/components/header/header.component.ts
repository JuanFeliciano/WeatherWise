import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public icon: string = 'cloudly_day';
  public logo: string = 'MovtechLogo';
  private readonly themeKey: string = 'preferred-theme';

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private bodyDocument: Document
  ) {
    this.loadTheme();
  }

  public toggle() {
    const isDarkTheme = this.bodyDocument.body.classList.toggle('dark-theme');

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
      this.renderer.addClass(this.bodyDocument.body, 'dark-theme');
      this.icon = 'cloudly_night';
      this.logo = 'MovtechLogoWhite';
    }
  }
}
