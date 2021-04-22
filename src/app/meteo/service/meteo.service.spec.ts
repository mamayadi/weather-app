/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MeteoService } from './meteo.service';

describe('Service: Meteo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeteoService]
    });
  });

  it('should ...', inject([MeteoService], (service: MeteoService) => {
    expect(service).toBeTruthy();
  }));
});
