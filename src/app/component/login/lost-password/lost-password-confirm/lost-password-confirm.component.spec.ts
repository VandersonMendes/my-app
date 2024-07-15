import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostPasswordConfirmComponent } from './lost-password-confirm.component';

describe('LostPasswordConfirmComponent', () => {
  let component: LostPasswordConfirmComponent;
  let fixture: ComponentFixture<LostPasswordConfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LostPasswordConfirmComponent]
    });
    fixture = TestBed.createComponent(LostPasswordConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
