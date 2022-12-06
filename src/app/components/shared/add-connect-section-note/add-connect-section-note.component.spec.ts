import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConnectSectionNoteComponent } from './add-connect-section-note.component';

describe('AddConnectSectionNoteComponent', () => {
  let component: AddConnectSectionNoteComponent;
  let fixture: ComponentFixture<AddConnectSectionNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConnectSectionNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConnectSectionNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
