import { Injectable } from '@angular/core';
import { DataCreate } from '../../interfaces/dataLogin';
import { Router } from '@angular/router';
import { HttpClient} from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../serviceApi/api.service';
@Injectable({
  providedIn: 'root'
})
export class ContextService {
  constructor(private router: Router, private http: HttpClient, private apiService: ApiService) { 
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

  // private advanceHome = new BehaviorSubject<boolean>(false);
  // advanceHome$ = this.advanceHome.asObservable();
  // advanceStartHome() {
  //   this.advanceHome.next(true);
  // }
  // notAdvanceStartHome() {
  //   this.advanceHome.next(false);
  // }
  isGuardHome(value: boolean): boolean {
    return value
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
     return this.idUser.getValue();
   }
     //  function return idCompanuy
      returnidCompany(): void{
        const token = localStorage.getItem('token');
        if (!token) {
          this.router.navigate(['registrar']);
          return;
        }
        let id;
        this.apiService.validate_token(token).then(data => {
            data.subscribe((data: any) => {
                this.idUser.next(data.id)
            })
        })
        // return id
      }
}
