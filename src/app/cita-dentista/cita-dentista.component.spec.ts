import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaDentistaComponent } from './cita-dentista.component';

describe('CitaDentistaComponent', () => {
  let component: CitaDentistaComponent;
  let fixture: ComponentFixture<CitaDentistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitaDentistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaDentistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
