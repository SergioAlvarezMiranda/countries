import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'shared-country-page',
  standalone: false,
  templateUrl: './by-country-page.component.html',
  styles: [`
    :host {
      display: block;
      background-color: #f8f9fa;
      padding: 1rem;
    }
  `]
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[]=[];//Para mostrar en el html
  public isLoading:boolean=false;
  public initialValue:string= '';
  constructor(private countriesServices: CountriesService){}
  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byCapital.countries;
    this.initialValue = this.countriesServices.cacheStore.byCapital.term;
  }

  searchByCountry(term: string): void {
    this.countriesServices.searchCountry( term )
    .subscribe(countries=>{
      this.countries = countries;
    })
    console.log({ term });
  }
}

