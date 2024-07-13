import { TestBed } from '@angular/core/testing';

import { HousingService } from './housing.service';

describe('HousingService', () => {
  let service: HousingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HousingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all the housing locations', () => {
    expect(service.getAllHousingLocations()).toBeTruthy();
    const locations = service.getAllHousingLocations();
    console.log(locations.then.length);
    expect(locations.then.length).toBeGreaterThan(0);
    service.submitApplication('John', 'Doe', 'john.doe@email.com');

  });

  it('should return a single housing location', () => {
    expect(service.getHousingLocationById(1)).toBeTruthy();
    let location = service.getHousingLocationById(1);
    expect(location.then).toBeTruthy();
    expect(location.then.length).toEqual(2);
    console.log(location.then);
    location = service.getHousingLocationById(-1);
  });




});
