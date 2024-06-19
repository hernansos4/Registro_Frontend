import { TestBed } from '@angular/core/testing';

import { ResumenClasesService } from './resumen-clases.service';

describe('ResumenClasesService', () => {
  let service: ResumenClasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumenClasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
