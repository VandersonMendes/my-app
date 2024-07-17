import { Injectable } from '@angular/core';
import { DataCreate } from '../interfaces/dataLogin';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ContextService {

  constructor(private router: Router, private http: HttpClient) {
    console.log(this.advanceLogin)
  }
  advanceLogin: boolean = false
  saveDateLogin(dateLogin: DataCreate) {
    sessionStorage.setItem('dateLogin', JSON.stringify(dateLogin));
  }

  appInitializerRouter(){
    //  fazer logica JWT, para fazer o login automatico caso se o usuario possui token
  }
    // validate_token(token: string) {
    // const headers = new HttpHeaders({
    //   'Authorization': `": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5N2QzMjYyYjIyYWY4MDdhZmM5N2JmIn0sImlhdCI6MTcyMTIyNzk4NiwiZXhwIjoxNzIxMjMxNTg2fQ.Ggajx8gAUWBYZx0cHOnlppKDEoTumYUW76`
    // });
    // return this.http.get('https://api-jwt-alpha.vercel.app/token', { headers });
  // }
}
