import { Injectable } from '@angular/core';
import { DataAvance } from '../interfaces/dataLogin';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
   urlBase = 'http://localhost:3000/auth'
  async createUser(user: DataAvance) {
    return await this.http.post<DataAvance>(`${this.urlBase}/register`, user);
  }
    verificEmailExist(email: string): any{
    return this.http.post(`${this.urlBase}/checkEmail`,{ email});
   }
   async login(email: string, password: string): Promise<any> {
    return await this.http.post(`${this.urlBase}/login`,{ email, password})
   }
}
