import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class CalendarService {
  private daysUrl = '../../assets/days.json';

  constructor(
    private http: Http
  ) { }

  getDays() {
    return this.http.get(this.daysUrl)
    .map((res: Response) => res.json());
  }

}
