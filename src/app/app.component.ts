import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  time: string;

  constructor() {
    this.time = new Date().toTimeString();
  }

  ngOnInit() {
    setInterval(() => {
      this.time = new Date().toTimeString();
    }, 500);
  }
}
