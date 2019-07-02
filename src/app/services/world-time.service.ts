import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorldTimeService {

  constructor(
    private _http: HttpClient,
  ) { }

  getTimeZones(): Observable<string[]> {
    // return of(['a', 'b', 'c', 'd', 'e']);
    return this._http.get<string[]>('http://worldtimeapi.org/api/timezone');
  }

  getTime(): Observable<WorldTimeApiTime> {
    return this._http.get<WorldTimeApiTime>('http://worldtimeapi.org/api/ip')
      .pipe(
        tap( item => { console.log(item) } ),
      );
  }
}

export interface WorldTimeApiTime {
  abbreviation: string,
  client_ip: string,
  datetime: string,
  day_of_week: number,
  day_of_year: number,
  dst: boolean,
  dst_from: string,
  dst_offset: number,
  dst_until: string,
  raw_offset: number,
  timezone: string,
  unixtime: number,
  utc_datetime: string,
  utc_offset: string,
  week_number: number,
}
