import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'shared-country-page',
  standalone: false,
  templateUrl: './by-country-page.component.html',
  styles: `[
    
  ]`
})
export class ByCountryPageComponent {
  public countries: Country[]=[];//Para mostrar en el html
  constructor(private countriesServices: CountriesService){}

  searchByCountry(term: string): void {
    this.countriesServices.searchCountry( term )
    .subscribe(countries=>{
      this.countries = countries;
    })
    console.log({ term });
  }
}

