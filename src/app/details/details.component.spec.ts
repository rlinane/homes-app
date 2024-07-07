import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location'; // Import the 'HousingLocation' type

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(() => {
    const mockHousingLocation: HousingLocation = {
      id: 1,
      name: "Test Housing Location",
      city: "Test City",
      state: "TS",
      photo: "test.jpg",
      availableUnits: 5,
      wifi: true,
      laundry: true

    }
    const mockService = {
      getHousingLocationById: () => {
        {return mockHousingLocation;};
      },
      getAllHousingLocations: () => {
        {return mockHousingLocation;};
      },
      submitApplication: (firstName: string, lastName: string, email: string) => {
        console.log(`Application submitted for ${firstName} ${lastName} at ${email}`);
      },
      url: 'http://localhost:3000/locations'
    };

    TestBed.configureTestingModule({
      imports: [DetailsComponent],
      providers: [{ provide: HousingService, useValue: mockService }]
    });
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
