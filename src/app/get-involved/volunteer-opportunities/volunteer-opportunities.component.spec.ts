import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerOpportunitiesComponent } from './volunteer-opportunities.component';

describe('VolunteerOpportunitiesComponent', () => {
  let component: VolunteerOpportunitiesComponent;
  let fixture: ComponentFixture<VolunteerOpportunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerOpportunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
