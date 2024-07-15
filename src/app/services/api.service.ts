import { Injectable } from '@angular/core';
import { DataAvance } from '../interfaces/dateLogin';
import { HttpClient } from '@angular/common/http';
import { computeMsgId } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
   urlBase = 'http://localhost:3000/auth'
  async createUser(user: DataAvance) {
    return await this.http.post<DataAvance>(`${this.urlBase}/register`, user)
  }
    verificEmailExist(email: string) {
    return this.http.post(`${this.urlBase}/checkEmail`,{ email})
   }
}
