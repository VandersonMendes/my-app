import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceLoginComponent } from './advance-login.component';

describe('AdvanceLoginComponent', () => {
  let component: AdvanceLoginComponent;
  let fixture: ComponentFixture<AdvanceLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvanceLoginComponent]
    });
    fixture = TestBed.createComponent(AdvanceLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
