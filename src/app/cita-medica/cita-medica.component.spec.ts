import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaMedicaComponent } from './cita-medica.component';

describe('CitaMedicaComponent', () => {
  let component: CitaMedicaComponent;
  let fixture: ComponentFixture<CitaMedicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitaMedicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
