import { TestBed } from '@angular/core/testing';

import { BloodComponentService } from './blood-component.service';

describe('BloodComponentService', () => {
  let service: BloodComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
