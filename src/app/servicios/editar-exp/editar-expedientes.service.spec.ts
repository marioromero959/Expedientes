import { TestBed } from '@angular/core/testing';

import { EditarExpedientesService } from './editar-expedientes.service';

describe('EditarExpedientesService', () => {
  let service: EditarExpedientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditarExpedientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
