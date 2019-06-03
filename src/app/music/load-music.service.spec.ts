import { TestBed, inject } from '@angular/core/testing';

import { LoadMusicService } from './load-music.service';

describe('LoadMusicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadMusicService]
    });
  });

  it('should be created', inject([LoadMusicService], (service: LoadMusicService) => {
    expect(service).toBeTruthy();
  }));
});
