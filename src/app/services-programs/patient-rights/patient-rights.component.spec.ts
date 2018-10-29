import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRightsComponent } from './patient-rights.component';

describe('PatientRightsComponent', () => {
  let component: PatientRightsComponent;
  let fixture: ComponentFixture<PatientRightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientRightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
