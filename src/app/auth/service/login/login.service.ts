import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/serviceApi/api.service';
import { Router } from '@angular/router';
export interface Id {
  id: string
}
@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private apiService: ApiService, private router: Router) { }

  authenticateToken(){
  const token = localStorage.getItem('token');
  if (token) {
    this.apiService.validate_token(token).then(data => {
      if(data){
        try{
        data.subscribe((dataV: any) => {
           if(dataV.error){
            localStorage.removeItem('token');
                this.router.navigate(['/registrar']);
            console.log('Error validating token', dataV.error);

           }
           this.router.navigate(['/company']);
        })
        
        }catch(err){
          localStorage.removeItem('token');
              this.router.navigate(['/registrar']);
          console.log('Error validating token', err);
        }
      }else{
        localStorage.removeItem('token');
            this.router.navigate(['/registrar']);
      }
    })
  }
  }
}
