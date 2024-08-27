import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LogOutService {

  constructor(private router: Router) { }
  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/registrar']);
    window.location.reload()
  }
}
