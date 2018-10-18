import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericanIndianResourcesComponent } from './american-indian-resources.component';

describe('AmericanIndianResourcesComponent', () => {
  let component: AmericanIndianResourcesComponent;
  let fixture: ComponentFixture<AmericanIndianResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmericanIndianResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericanIndianResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
