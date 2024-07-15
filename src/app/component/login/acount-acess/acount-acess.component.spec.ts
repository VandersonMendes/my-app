import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcountAcessComponent } from './acount-acess.component';

describe('AcountAcessComponent', () => {
  let component: AcountAcessComponent;
  let fixture: ComponentFixture<AcountAcessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcountAcessComponent]
    });
    fixture = TestBed.createComponent(AcountAcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
