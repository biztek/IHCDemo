import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityWellnessComponent } from './community-wellness.component';

describe('CommunityWellnessComponent', () => {
  let component: CommunityWellnessComponent;
  let fixture: ComponentFixture<CommunityWellnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityWellnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityWellnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
