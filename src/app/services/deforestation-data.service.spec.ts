import { TestBed } from '@angular/core/testing';

import { DeforestationDataService } from './deforestation-data.service';

describe('DeforestationDataService', () => {
  let service: DeforestationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeforestationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
