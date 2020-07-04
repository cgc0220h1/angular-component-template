import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-message-timer',
  templateUrl: './message-timer.component.html',
  styleUrls: ['./message-timer.component.scss']
})
export class MessageTimerComponent implements OnInit, OnChanges {
  message: string;

  @Input()
  status;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('status' in changes) {
      this.message = changes.status.currentValue ? 'Finished' : '';
    }
  }
}
