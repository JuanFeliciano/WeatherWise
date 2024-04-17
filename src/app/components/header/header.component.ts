import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public icon: string = 'clear_day';

  public toggle() {
    const theme = document.body.classList.toggle('dark-theme');
    if (theme) {
      return (this.icon = 'clear_night');
    }
    return (this.icon = 'clear_day');
  }
}
