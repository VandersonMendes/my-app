import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelCompanyComponent } from './painel-company.component';

describe('PainelCompanyComponent', () => {
  let component: PainelCompanyComponent;
  let fixture: ComponentFixture<PainelCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainelCompanyComponent]
    });
    fixture = TestBed.createComponent(PainelCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
