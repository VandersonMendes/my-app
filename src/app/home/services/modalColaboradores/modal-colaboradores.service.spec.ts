import { TestBed } from '@angular/core/testing';

import { ModalColaboradoresService } from './modal-colaboradores.service';

describe('ModalColaboradoresService', () => {
  let service: ModalColaboradoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalColaboradoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
