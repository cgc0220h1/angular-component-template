import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'angular-component-template';
  secondsInput: number;
  isCountdownStop: boolean;

  updateCountdownStatus(status: boolean): void {
    this.isCountdownStop = status;
  }
}
