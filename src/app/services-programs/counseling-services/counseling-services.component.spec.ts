import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounselingServicesComponent } from './counseling-services.component';

describe('CounselingServicesComponent', () => {
  let component: CounselingServicesComponent;
  let fixture: ComponentFixture<CounselingServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounselingServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounselingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
