import { TestBed } from '@angular/core/testing';

import { ModalSidebarService } from './modal-sidebar.service';

describe('ModalSidebarService', () => {
  let service: ModalSidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalSidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
