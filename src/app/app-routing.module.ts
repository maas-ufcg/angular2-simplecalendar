import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import { DayDetailComponent } from './day-detail/day-detail.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CalendarComponent
  },
  {
    path: 'days/:id',
    component: DayDetailComponent
  },
  {
    path: 'events/:id',
    component: EventDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class CalendarRoutingModule { }
