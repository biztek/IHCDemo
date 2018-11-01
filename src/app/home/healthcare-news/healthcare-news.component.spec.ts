import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcareNewsComponent } from './healthcare-news.component';

describe('HealthcareNewsComponent', () => {
  let component: HealthcareNewsComponent;
  let fixture: ComponentFixture<HealthcareNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthcareNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthcareNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
