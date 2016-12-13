import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { CalendarService } from '../services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  days = [];

  constructor(
    private calendarService: CalendarService
  ) { }

  ngOnInit() {
    this.calendarService
    .getDays()
    .subscribe(data => {
      this.days = data;
    });
  }

}
