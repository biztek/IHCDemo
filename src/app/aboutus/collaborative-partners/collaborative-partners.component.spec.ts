import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborativePartnersComponent } from './collaborative-partners.component';

describe('CollaborativePartnersComponent', () => {
  let component: CollaborativePartnersComponent;
  let fixture: ComponentFixture<CollaborativePartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollaborativePartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaborativePartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
