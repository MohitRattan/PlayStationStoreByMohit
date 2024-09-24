import { TestBed } from '@angular/core/testing';

import { AllgamesService } from './allgames.service';

describe('AllgamesService', () => {
  let service: AllgamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllgamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
