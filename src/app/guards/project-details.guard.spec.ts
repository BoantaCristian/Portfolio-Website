import { TestBed, async, inject } from '@angular/core/testing';

import { ProjectDetailsGuard } from './project-details.guard';

describe('ProjectDetailsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectDetailsGuard]
    });
  });

  it('should ...', inject([ProjectDetailsGuard], (guard: ProjectDetailsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
