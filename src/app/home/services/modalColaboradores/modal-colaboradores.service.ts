import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalColaboradoresService {

  constructor() { }
   isModalColaboradoresOpen: boolean = false

  openModalColaboradores(value: boolean): boolean{
    this.isModalColaboradoresOpen = value
    return this.isModalColaboradoresOpen && this.isModalColaboradoresOpen
  }
  getValueModalColaboradores(): boolean{
    return this.isModalColaboradoresOpen && this.isModalColaboradoresOpen
  }
}
