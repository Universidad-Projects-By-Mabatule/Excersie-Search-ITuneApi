import { TestBed } from '@angular/core/testing';

import { ITuneApiService } from './itune-api.service';

describe('ITuneApiService', () => {
  let service: ITuneApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ITuneApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
