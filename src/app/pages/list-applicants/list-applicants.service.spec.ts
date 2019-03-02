import { TestBed } from '@angular/core/testing';

import { ListApplicantsService } from './list-applicants.service';

describe('ListApplicantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListApplicantsService = TestBed.get(ListApplicantsService);
    expect(service).toBeTruthy();
  });
});
