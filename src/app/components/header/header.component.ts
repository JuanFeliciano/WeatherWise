import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public localStorage: LocalStorageService) {}

  ngOnInit(): void {
    this.localStorage.toggle();
    this.localStorage.icon;
  }
}
