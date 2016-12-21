import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../components/event';
import { CalendarService } from '../services/calendar.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  private days = [];

  private date = new Date();
  private weekDaysNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  private wDays = [];

  constructor(
    private calendarService: CalendarService,
    private router: Router
  ) { }

  ngOnInit() {
    // Getting the data of the first and last days of the current month.
    let month = this.date.getMonth();
    let year = this.date.getFullYear();
    this.wDays = this.getDaysInMonth(month, year);

    let firstDay = this.wDays[0].getDay();
    for(var k = 0; k < firstDay; k++) {
      let firstMonthDay = this.wDays[0];
      let yesterday = new Date(firstMonthDay.getTime());
      yesterday.setDate(firstMonthDay.getDate() -1);
      this.wDays.unshift(yesterday);
    }

    this.calendarService
    .getDays()
    .subscribe(data => {
      this.days = data;
    });
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

  private onClick(day) {
    let aux = this.getDay(day);
    if(aux) {
      this.router.navigate(['/days', aux.id]);
    }
  }

  private getStringDate(date) {
    let month = date.getMonth() + 1;
    let aux = month + '-' + date.getDate() + '-' + date.getFullYear();
    return aux;
  }

  private hasEvent(day){
    if(day.getMonth() < this.date.getMonth()) {
      return "#c4beb6";
    }

    let color;
    let auxDay = this.getDay(day);
    if(!auxDay) {
      return color;
    }

    let eventsLength = auxDay.events.length;
    if(eventsLength > 0) {
      color = "#3e8ddd";
    }
    return color;
  }

  private getDay(day) {
    for(let aux of this.days) {
      let date = this.getStringDate(day);
      if(aux.date == date){
        return aux;
      }
    }
    // If has no events to this day.
    return false;
  }

  private monthString(month) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[month];
  }

}
