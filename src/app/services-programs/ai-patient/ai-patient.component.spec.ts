import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPatientComponent } from './ai-patient.component';

describe('AiPatientComponent', () => {
  let component: AiPatientComponent;
  let fixture: ComponentFixture<AiPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
