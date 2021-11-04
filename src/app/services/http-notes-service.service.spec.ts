import { TestBed } from '@angular/core/testing';

import { HttpNotesServiceService } from './http-notes-service.service';

describe('HttpNotesServiceService', () => {
  let service: HttpNotesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpNotesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
