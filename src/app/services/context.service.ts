import { Injectable } from '@angular/core';
import { DataCreate } from '../interfaces/dateLogin';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ContextService {

  constructor(private router: Router) {
    console.log(this.advanceLogin)
  }
  advanceLogin: boolean = false
  saveDateLogin(dateLogin: DataCreate) {
    sessionStorage.setItem('dateLogin', JSON.stringify(dateLogin));
  }

  appInitializerRouter(){
    //  fazer logica JWT, para fazer o login automatico caso se o usuario possui token
  }
}
