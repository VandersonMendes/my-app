import { Injectable } from '@angular/core';
import { DataCreate } from '../../interfaces/dataLogin';
import { Router } from '@angular/router';
import { HttpClient} from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContextService {
  constructor(private router: Router, private http: HttpClient) { 
    console.log(this.getAcessHomeValue().valueOf())
  }
  private advanceLogin = new BehaviorSubject<boolean>(false);
  advanceLogin$ = this.advanceLogin.asObservable();
  advanceRegister() {
    this.advanceLogin.next(true);
  }
  notAdvanceRegister() {
    this.advanceLogin.next(false);
  }
  getAcessRegisterValue() {
    return this.advanceLogin.getValue();
  }

  private advanceHome = new BehaviorSubject<boolean>(false);
  advanceHome$ = this.advanceHome.asObservable();
  advanceStartHome() {
    this.advanceHome.next(true);
  }
  notAdvanceStartHome() {
    this.advanceHome.next(false);
  }
  getAcessHomeValue() {
    return this.advanceHome.getValue();
  }

  saveDateLogin(dataLogin: DataCreate) {
    sessionStorage.setItem('dateLogin', JSON.stringify(dataLogin));
  }
  
   private idUser = new BehaviorSubject<string>('');
   idUser$ = this.idUser.asObservable();
   saveIdUser(id: string) {
     this.idUser.next(id);
   }
   returnIdUser(){
     console.log(this.idUser.getValue())
     return this.idUser.getValue();
   }


}
