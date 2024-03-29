import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component'; // In order to use this component we need to import it here
import { HousingService } from '../../housing.service';

import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // readonly baseUrl: string = 'https://angular.dev/assets/tutorials/common';

  housingLocationList: HousingLocation[] = [];

  housingService: HousingService = inject(HousingService);

  filteredLocationList: HousingLocation[] = [];


  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList
      this.filteredLocationList = housingLocationList;
    })
  }

  filterResults(text: string) {
    if (!text) this.filteredLocationList = this.housingLocationList;

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.name.toLowerCase().includes(text.toLowerCase()));
  }
}
