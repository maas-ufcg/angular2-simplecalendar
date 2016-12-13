import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  @Input() day;
  id: number;
  events: Event[];

  constructor() { }

  ngOnInit(){
    this.id = this.day.id;
    this.events = this.day.events;
  }

}
