import { TestBed } from '@angular/core/testing';

import { RegistroClasesService } from './registro-clases.service';

describe('RegistroClasesService', () => {
  let service: RegistroClasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroClasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
