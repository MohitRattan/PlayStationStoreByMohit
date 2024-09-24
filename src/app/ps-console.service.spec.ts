import { TestBed } from '@angular/core/testing';

import { PsConsoleService } from './ps-console.service';

describe('PsConsoleService', () => {
  let service: PsConsoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PsConsoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
