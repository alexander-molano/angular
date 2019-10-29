import { TestBed } from '@angular/core/testing';

import { CedinsiServicioService } from './cedinsi-servicio.service';

describe('CedinsiServicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CedinsiServicioService = TestBed.get(CedinsiServicioService);
    expect(service).toBeTruthy();
  });
});
