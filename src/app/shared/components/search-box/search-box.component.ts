import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: false,
  templateUrl: './search-box.component.html',
  styles: [
    `
    .btn:hover {
      color: #ced4da;
      background-color: #495057;
      border-color: #495057;
    }
    .btn-outline-success {
      --bs-btn-color: #495057;
      --bs-btn-border-color: #495057;
    }
    `
  ]
})
export class SearchBoxComponent {
  @Input()
  public placeholder:string= '';

  @Output()
  public onValue =new EventEmitter<string>();

  //Funciona dando Enter
  // emitValue(value:string):void {
  //   this.onValue.emit(value);
  // }

  // Método para capturar el evento de búsqueda
  onSearch(event: Event, value: string): void {
    event.preventDefault(); // Evita el recargo de la página
    if (value.trim()) { // Evita enviar valores vacíos
      this.onValue.emit(value);
    }
  }
}
