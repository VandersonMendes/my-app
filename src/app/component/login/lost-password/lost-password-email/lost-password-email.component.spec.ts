import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostPasswordEmailComponent } from './lost-password-email.component';

describe('LostPasswordEmailComponent', () => {
  let component: LostPasswordEmailComponent;
  let fixture: ComponentFixture<LostPasswordEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LostPasswordEmailComponent]
    });
    fixture = TestBed.createComponent(LostPasswordEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
