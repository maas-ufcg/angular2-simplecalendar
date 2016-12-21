/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarComponent } from './calendar.component';

describe('CalendarComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarComponent ]
    });

    this.fixture = TestBed.createComponent(CalendarComponent);
    this.component = this.fixture.debugElement.componentInstance;
  });

  it('should create', () => {
    expect(this.component).toBeTruthy();
  });

  it('should date not to be undefined', () => {
    expect(this.component.date).not.toBeUndefined();
  });

  it('should dayNames not to be undefined', () => {
    expect(this.component.dayNames).not.toBeUndefined();
  });

  it('should monthDays not to be undefined', () => {
    expect(this.component.monthDays).not.toBeUndefined();
  });

  it('should getMonthString return "December"', () => {
    let expected = this.component.getMonthString(11);
    expect(expected).toBe('December');
  });
});
