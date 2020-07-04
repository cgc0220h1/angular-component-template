import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageTimerComponent } from './message-timer.component';

describe('MessageTimerComponent', () => {
  let component: MessageTimerComponent;
  let fixture: ComponentFixture<MessageTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
