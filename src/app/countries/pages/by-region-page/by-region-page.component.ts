import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  standalone: false,
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  public countries:Country[]=[];
  constructor(private CountriesService:CountriesService){}
  searchByRegion(region: string):void {
    this.CountriesService.searchRegion( region )
    .subscribe(countries=>{
      this.countries = countries;
    })
    console.log({region});
  }
}
