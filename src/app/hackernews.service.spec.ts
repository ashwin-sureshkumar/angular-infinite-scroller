import { TestBed, inject } from '@angular/core/testing';

import { HackerNewsService } from './hackernews.service';

describe('HackernewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HackerNewsService]
    });
  });

  it('should ...', inject([HackerNewsService], (service: HackerNewsService) => {
    expect(service).toBeTruthy();
  }));
});
