import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CalendarRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './day/day.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CalendarRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
