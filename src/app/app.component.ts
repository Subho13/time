import { Component, OnInit, OnDestroy } from '@angular/core';
import { WorldTimeService } from './services/world-time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  // The displayed time
  time: string;
  // The time object used to maintain and format the displayed time
  private _time: Date;
  // Interval timer to update the time
  private _timer: any;
  // Interval time in milliseconds
  private _interval = 500;
  // List of available timezones
  timezones: string[];
  // Displayed timezone
  private _timezone: string;
  // Locale
  private _locale: string;

  constructor(
    private _timeService: WorldTimeService
  ) {
    // Initialize the date so that screen is not blank
    this._time = new Date();
    // Initialize the timezone and locale
    const temp = Intl.DateTimeFormat().resolvedOptions();
    this._timezone = temp.timeZone;
    this._locale = temp.locale;
    this.timezones = [ this._timezone ];
  }

  ngOnInit() {
    // Set the timer to update time
    this._timer = setInterval(() => {
      // Update the time in the date object
      this._time.setTime(this._time.getTime() + this._interval);
      // Get the formatted string to display
      this.time = this._time.toLocaleTimeString(this._locale, { timeZone: this._timezone });
    }, this._interval);

    // Update the time with the time received from api
    this._timeService.getTime().subscribe((i) => {
      this._time = new Date(i.datetime);
      // also update the timezone
      this._timezone = i.timezone;
    });

    // Get the list of timezones
    this._timeService.getTimeZones().subscribe((i) => {
      this.timezones = i;
    })
  }

  // Stop the interval timer when destroyed
  ngOnDestroy() {
    clearInterval(this._timer);
  }

  // Set the timezone selected from options
  changeTimezone(i: string) {
    this._timezone = i;
  }
}
