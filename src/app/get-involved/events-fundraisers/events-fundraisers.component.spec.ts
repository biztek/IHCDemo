import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsFundraisersComponent } from './events-fundraisers.component';

describe('EventsFundraisersComponent', () => {
  let component: EventsFundraisersComponent;
  let fixture: ComponentFixture<EventsFundraisersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsFundraisersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsFundraisersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
