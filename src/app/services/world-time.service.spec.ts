import { TestBed } from '@angular/core/testing';

import { WorldTimeService } from './world-time.service';

describe('WorldTimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorldTimeService = TestBed.get(WorldTimeService);
    expect(service).toBeTruthy();
  });
});
