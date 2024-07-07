import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HousingLocationComponent } from './housing-location.component';
import { RouterTestingModule } from "@angular/router/testing";
import {HousingLocation} from '../housinglocation';

describe('HousingLocationComponent', () => {
  let component: HousingLocationComponent;
  let fixture: ComponentFixture<HousingLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HousingLocationComponent,
        RouterTestingModule
      ]
    });
    fixture = TestBed.createComponent(HousingLocationComponent);
    component = fixture.componentInstance;

    component.housingLocation = {
      id: 1,
      name: 'Test Housing Location',
      city: 'Test City',
      state: 'TS',
      photo: 'test.jpg'
    } as HousingLocation;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
