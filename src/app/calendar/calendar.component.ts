import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { CalendarService } from '../services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  months = [];
  days = [];
  defaultMonth = 0;

  constructor(
    private calendarService: CalendarService
  ) { }

  ngOnInit() {
    this.calendarService
    .getMonths()
    .subscribe(data => {
      this.months = data;
      this.days = this.months[this.defaultMonth].days;
    });
  }

}
