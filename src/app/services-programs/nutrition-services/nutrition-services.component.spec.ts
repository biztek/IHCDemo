import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionServicesComponent } from './nutrition-services.component';

describe('NutritionServicesComponent', () => {
  let component: NutritionServicesComponent;
  let fixture: ComponentFixture<NutritionServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
