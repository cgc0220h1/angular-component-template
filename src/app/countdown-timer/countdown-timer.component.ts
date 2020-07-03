import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  private intervalID = 0;
  message = 'Click start button to start the countdown';
  remainingTime: number;
  private seconds = 11;

  @Input()
  get second(): number {
    return this.seconds;
  }

  set second(value) {
    value = typeof value === 'undefined' ? 11 : value;
    const valueFixed = Number(value);
    this.seconds = Number.isNaN(valueFixed) ? 11 : valueFixed;
  }

  constructor() {
  }

  ngOnInit(): void {
    this.remainingTime = this.seconds;
  }

  ngOnDestroy(): void {
  }

  clearTimer(): void {
  }

  start(): void {
    this.intervalID = setInterval(() => {
      this.remainingTime--;
      if (this.remainingTime === 0) {
        clearInterval(this.intervalID);
      }
    }, 1000);
  }

  stop(): void {
    clearInterval(this.intervalID);
  }

  reset(): void {
    this.remainingTime = this.seconds;
  }

  private countDown(): void {
  }

}
