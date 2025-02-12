import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, map, Observable, of} from 'rxjs';

import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl:string ='https://restcountries.com/v3.1'

  constructor(private httpClient:HttpClient) { }

  searchCountryByAlphaCode(code:string):Observable<Country| null>{
    return this.httpClient.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
    .pipe(
      map( countries =>countries.length>0?countries[0]:null ),
      catchError( () => of(null))
    );
  }

  searchCapital(term:string): Observable<Country[]>{
    //const url= `${this.apiUrl}/capital/${term}`;
    return this.httpClient.get<Country[]>(`${this.apiUrl}/capital/${term}`)
    .pipe(
      catchError( () => of([]))
      // tap( countries => console.log('Tap1', countries )) ,
      // map( countries => [] ),
      // tap( countries => console.log('Tap2', countries )),
    );
  }

  searchCountry(term:string):Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.apiUrl}/name/${term}`)
    .pipe(
      catchError( () => of([]))
    );
  }

  searchRegion(region:string):Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.apiUrl}/subregion/${region}`)
    .pipe(
      catchError(()=>of([]))
    );
  }


}
