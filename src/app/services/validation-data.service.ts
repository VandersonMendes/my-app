import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationDataService {

  constructor() { }
  emailValidation(email: string): any{
    const regexEmailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/;
    if(!regexEmailValidation.test(email)) return true; else return false
  }

}
