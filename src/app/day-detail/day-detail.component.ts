import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { CalendarService } from '../services/calendar.service';

@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.scss']
})
export class DayDetailComponent implements OnInit {
  private id: number;
  private day: any;

  constructor(
    private route: ActivatedRoute,
    private calendarService: CalendarService
  ) { }

  ngOnInit() {
    this.route.params
    .subscribe((params: Params) => this.id = params['id']);

    this.calendarService
    .getDays()
    .subscribe(data => {
      this.getDay(data);
    });
  }

  private getDay(days) {
   for(let day of days) {
     if(day.id == this.id) {
       this.day = day;
     }
   } 
  }

}
