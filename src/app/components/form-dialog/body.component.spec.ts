import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDialogComponent } from './body.component';

describe('BodyComponent', () => {
  let component: FormDialogComponent;
  let fixture: ComponentFixture<FormDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormDialogComponent]
    });
    fixture = TestBed.createComponent(FormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
