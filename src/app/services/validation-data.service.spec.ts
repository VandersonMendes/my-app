import { TestBed } from '@angular/core/testing';

import { ValidationDateService } from './validation-date.service';

describe('ValidationDateService', () => {
  let service: ValidationDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
