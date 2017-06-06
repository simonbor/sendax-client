import { TestBed, inject } from '@angular/core/testing';

import { FormPosterService } from './form-poster.service';
import { Http, ConnectionBackend, Headers, RequestOptions } from '@angular/http';

describe('FormPosterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [FormPosterService, Http, ConnectionBackend, Headers , RequestOptions]
    });
  });

  // it('should ...', inject([FormPosterService], (service: FormPosterService) => {
  //   expect(service).toBeTruthy();
  // }));
});
