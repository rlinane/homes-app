import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeComponent]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('should filter housing locations', () => {
    component.housingLocationList = [
      {
        id: 1,
        name: "Test Housing Location",
        city: "Test City 1",
        state: "TS",
        photo: "test.jpg",
        availableUnits: 5,
        wifi: true,
        laundry: true
      },
      {
        id: 1,
        name: "Test Housing Location 2",
        city: "Test City 2",
        state: "TS",
        photo: "test2.jpg",
        availableUnits: 2,
        wifi: false,
        laundry: false
      }
    ];

    component.filterResults('Test City 1');
    expect(component.filteredLocationList.length).toBe(1);
    expect(component.filteredLocationList[0].name).toBe('Test Housing Location');

    component.filterResults('');
    expect(component.filteredLocationList.length).toBe(2);

  });

});
