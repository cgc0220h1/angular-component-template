import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CountdownTimerComponent} from './countdown-timer/countdown-timer.component';
import {MessageTimerComponent} from './message-timer/message-timer.component';
import {FormsModule} from '@angular/forms';
import {RatingBarComponent} from './rating-bar/rating-bar.component';
import {PipeDemoComponent} from './pipe-demo/pipe-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    CountdownTimerComponent,
    MessageTimerComponent,
    RatingBarComponent,
    PipeDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, RatingBarComponent, PipeDemoComponent]
})
export class AppModule {
}
