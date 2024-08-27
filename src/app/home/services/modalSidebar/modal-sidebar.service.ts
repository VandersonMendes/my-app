import { Injectable, } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalSidebarService {
  constructor() { }
  private modalLogin = new BehaviorSubject<boolean>(false);
  modalLogin$ = this.modalLogin.asObservable();
  toggleModal(modalValue: boolean) {
    this.modalLogin.next(modalValue);
  }
  getValueModal(): boolean {
    console.log(this.modalLogin.getValue())
   return this.modalLogin.getValue()
  }
}
