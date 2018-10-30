import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSatisfactionSurveyComponent } from './customer-satisfaction-survey.component';

describe('CustomerSatisfactionSurveyComponent', () => {
  let component: CustomerSatisfactionSurveyComponent;
  let fixture: ComponentFixture<CustomerSatisfactionSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSatisfactionSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSatisfactionSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
