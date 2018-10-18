import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IhcArchivesComponent } from './ihc-archives.component';

describe('IhcArchivesComponent', () => {
  let component: IhcArchivesComponent;
  let fixture: ComponentFixture<IhcArchivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IhcArchivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IhcArchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
