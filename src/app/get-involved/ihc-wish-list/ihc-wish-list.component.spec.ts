import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IhcWishListComponent } from './ihc-wish-list.component';

describe('IhcWishListComponent', () => {
  let component: IhcWishListComponent;
  let fixture: ComponentFixture<IhcWishListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IhcWishListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IhcWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
