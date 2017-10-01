import { TestBed, inject } from '@angular/core/testing';

import { SendValueService } from './send-value.service';

describe('SendValueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendValueService]
    });
  });

  it('should be created', inject([SendValueService], (service: SendValueService) => {
    expect(service).toBeTruthy();
  }));
});
