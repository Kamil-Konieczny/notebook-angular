import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNoteDialogComponent } from './show-note-dialog.component';

describe('ShowNoteDialogComponent', () => {
  let component: ShowNoteDialogComponent;
  let fixture: ComponentFixture<ShowNoteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowNoteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNoteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
