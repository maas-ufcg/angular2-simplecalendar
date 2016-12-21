import { Component, OnInit } from '@angular/core';
import { Event } from '../components/event';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  private date = new Date();
  private dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  private monthDays = [];

  constructor() { }

  ngOnInit() {
    let currentMonth = this.date.getMonth();
    let currentYear = this.date.getFullYear();
    this.monthDays = this.getDaysInMonth(currentMonth, currentYear);

    let firstDay = this.monthDays[0].getDay();
    for(var k = 0; k < firstDay; k++) {
      let firstMonthDay = this.monthDays[0];
      let yesterday = new Date(firstMonthDay.getTime());
      yesterday.setDate(firstMonthDay.getDate() -1);
      this.monthDays.unshift(yesterday);
    }
  }

  private getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  private getMonthString(month) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[month];
  }

}
