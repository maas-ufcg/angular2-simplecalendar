import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CalendarRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './day/day.component';
import { CalendarService } from './services/calendar.service';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { DayDetailComponent } from './day-detail/day-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DayComponent,
    EventDetailComponent,
    DayDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CalendarRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [
    CalendarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
