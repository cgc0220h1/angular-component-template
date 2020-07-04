import {Component, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit, OnDestroy, OnChanges {
  private intervalID = 0;
  message = 'Click start button to start the countdown';
  remainingTime: number;

  @Input()
  seconds: number;

  @Output()
  finish: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (`seconds` in changes) {
      let value = changes.seconds.currentValue;
      value = typeof value === 'undefined' ? 0 : value;
      const valueFixed = Number(value);
      this.seconds = Number.isNaN(valueFixed) ? 0 : valueFixed;
      this.remainingTime = this.seconds;
      this.finish.emit(false);
    }
  }

  ngOnInit(): void {
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
        this.finish.emit(true);
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
    if (this.remainingTime === 0) {
      this.finish.emit(true);
    }
  }
}
