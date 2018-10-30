import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsSuggestionsComponent } from './comments-suggestions.component';

describe('CommentsSuggestionsComponent', () => {
  let component: CommentsSuggestionsComponent;
  let fixture: ComponentFixture<CommentsSuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsSuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
