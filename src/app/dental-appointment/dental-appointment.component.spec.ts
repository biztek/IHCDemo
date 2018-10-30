import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalAppointmentComponent } from './dental-appointment.component';

describe('DentalAppointmentComponent', () => {
  let component: DentalAppointmentComponent;
  let fixture: ComponentFixture<DentalAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentalAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentalAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
