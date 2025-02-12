import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'shared-capital-page',
  standalone: false,
  templateUrl: './by-capital-page.component.html',
  styles: `[

  ]`
})
export class ByCapitalPageComponent {
  // @Input()
  // public term!:string;

  // ngOnInit(): void {
  //   // Lógica de inicialización aquí
  //   console.log('ByCapitalPageComponent inicializado');
  // }

  // searchByCapital( term:string):void {
  //   console.log('Desde ByCapitalPage');
  //   console.log({term});
  // }

  public countries: Country[]=[];//Para mostrar en el html
  constructor(private countriesServices: CountriesService){}

  searchByCapital(term: string): void {
    // const inputElement = event.target as HTMLInputElement;
    // const term = inputElement.value;
    // console.log('Desde ByCapitalPage');
    // console.log({ term });
    this.countriesServices.searchCapital( term )
    .subscribe(countries=>{
      this.countries = countries;
    })

    console.log({ term });
  }
}
