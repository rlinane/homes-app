import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/locations';
  constructor() {     
  }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return data.json() ?? [];
  };

  async getHousingLocationById(id: Number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return data.json() ?? {};
  };

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Application submitted for ${firstName} ${lastName} at ${email}`);
  } 
}
