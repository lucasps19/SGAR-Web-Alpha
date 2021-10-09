import { TestBed } from '@angular/core/testing';

import { ApreciacaoService } from './apreciacao.service';

describe('ApreciacaoService', () => {
  let service: ApreciacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApreciacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
