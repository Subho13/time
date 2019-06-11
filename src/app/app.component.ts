import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private time: string;

  constructor() {
    this.time = new Date().toTimeString();

    setInterval(() => {
      this.time = new Date().toTimeString();
    }, 500);
  }
}
