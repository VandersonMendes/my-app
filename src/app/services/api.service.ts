import { Injectable } from '@angular/core';
import { DataAvance } from '../interfaces/dataLogin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
   urlBaseAuth = 'http://localhost:3000/auth'
  async createUser(user: DataAvance) {
    return await this.http.post<DataAvance>(`${this.urlBaseAuth}/register`, user);
  }
    verificEmailExist(email: string): any{
    return this.http.post(`${this.urlBaseAuth}/checkEmail`,{ email});
   }
   async login(email: string, password: string): Promise<any> {
    return await this.http.post(`${this.urlBaseAuth}/login`,{ email, password})
   }
    async validate_token(token: string) {
    const tokenString = JSON.parse(token);
    console.log(tokenString)
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${tokenString}`
    });
    return  await this.http.get(`${this.urlBaseAuth}/token`, { headers });
  }
}
