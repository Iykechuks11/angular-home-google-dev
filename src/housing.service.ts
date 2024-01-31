import { Injectable } from '@angular/core';
import { HousingLocation } from './app/housing-location';

@Injectable({
  providedIn: 'root'
})

export class HousingService {
  // readonly baseUrl: string = 'https://angular.dev/assets/tutorials/common';

  url: string = 'http://localhost:3000/location'

  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? []
  }

  async getHousingLocationId(id: Number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {}
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName + " " + lastName + " " + email)
  }
}
