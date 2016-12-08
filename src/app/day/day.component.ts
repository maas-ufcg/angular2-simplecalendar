import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  events: any[] = [
    {"id": 1, "title": "Test", "description": "Test Event"}
  ];

  dayNumber: number;

  constructor() { }

  ngOnInit() {
    //Tests only.
    this.dayNumber = 1;
  }

}
