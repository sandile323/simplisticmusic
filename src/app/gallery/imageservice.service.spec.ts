import { TestBed, inject } from '@angular/core/testing';

import { ImageserviceService } from './imageservice.service';

describe('ImageserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageserviceService]
    });
  });

  it('should be created', inject([ImageserviceService], (service: ImageserviceService) => {
    expect(service).toBeTruthy();
  }));
});
