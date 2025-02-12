import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  standalone: false,
  templateUrl: './country-table.component.html',
  styles: [
    `img{
      width:25px;
    }
    .alert-warning {
    --bs-alert-color: #fff;
    --bs-alert-bg: #5b5a55;
    --bs-alert-border-color: #000;
    --bs-alert-link-color: var(--bs-warning-text-emphasis);
    }
    `


  ]
})
export class CountryTableComponent {
  @Input()
  public countries:Country[]=[];
}
