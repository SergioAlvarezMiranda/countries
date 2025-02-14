import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'shared-capital-page',
  standalone: false,
  templateUrl: './by-capital-page.component.html',
  styles: [`
    
  `]
})
export class ByCapitalPageComponent implements OnInit{
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
  public isLoading:boolean=false;
  public initialValue:string= '';

  constructor(private countriesServices: CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byCapital.countries;
    this.initialValue = this.countriesServices.cacheStore.byCapital.term;
  }

  searchByCapital(term: string): void {
    // const inputElement = event.target as HTMLInputElement;
    // const term = inputElement.value;
    // console.log('Desde ByCapitalPage');
    // console.log({ term });

    this.isLoading = true;
  this.countriesServices.searchCapital(term)
    .subscribe({
      next: (countries) => {
        this.countries = countries;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al buscar por capital:', err);
        this.isLoading = false;
      }
    });

    console.log('Buscando capital:', term);
  }
}
