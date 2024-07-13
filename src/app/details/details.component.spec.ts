import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation'; 
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';


describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  const fakeActivatedRoute = {
    snapshot: {
      data: {},
      params: {
        id: 1
      }
    }
  } as unknown as ActivatedRoute;

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

    let housingService = jasmine.createSpyObj('HousingService', ['getHousingLocationById', 'getAllHousingLocations', 'submitApplication', 'url']);
    housingService.getHousingLocationById.and.returnValue(Promise.resolve(mockHousingLocation));
    housingService.getAllHousingLocations.and.returnValue(Promise.resolve([mockHousingLocation]));
    housingService.submitApplication.and.callFake(() => {
      console.log(`Application submitted for ${mockHousingLocation.name} at ${mockHousingLocation.city}`);
    }
    );
    housingService.url.and.returnValue('http://localhost:3000/locations');

    TestBed.configureTestingModule({
      imports: [DetailsComponent, RouterTestingModule],
      providers: [
        { provide: HousingService, useValue: housingService },
        {provide: ActivatedRoute, useValue: fakeActivatedRoute}
      ]
    });
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    component.submitApplication();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component?.applyForm?.controls['firstName'].setValue(null);
    component?.applyForm?.controls['lastName'].setValue(null);
    component?.applyForm?.controls['email'].setValue(null);
    component.submitApplication();
  });
});
