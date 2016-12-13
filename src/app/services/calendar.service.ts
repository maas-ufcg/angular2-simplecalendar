import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { DayComponent } from '../day/day.component';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CalendarService {
  private daysUrl = '../../assets/days.json';

  constructor(
    private http: Http
  ) { }

  getDays(id = undefined): Observable<DayComponent[]> {
    return this.http.get(this.daysUrl)
    .map(this.extractData)
    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
