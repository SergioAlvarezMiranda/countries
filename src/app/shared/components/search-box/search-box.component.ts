import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

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
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer: Subject<string>=new Subject<string>();//rxjs
  private debouncerSuscription?:Subscription;

  @Input()
  public placeholder:string = '';

  @Input()
  public initialValue:string ='';

  @Output()
  public onValue =new EventEmitter<string>();

  @Output()
  public onDebounce =new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(value =>{
      this.onDebounce.emit(value);
    });
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

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

  onKyPress(searchTerm:string){
    this.debouncer.next(searchTerm);
  }
}
