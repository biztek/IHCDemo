import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesProgramsComponent } from './services-programs.component';

describe('ServicesProgramsComponent', () => {
  let component: ServicesProgramsComponent;
  let fixture: ComponentFixture<ServicesProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
