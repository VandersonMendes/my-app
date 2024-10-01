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
  let returnValue = false
  const token = localStorage.getItem('token');
  if (!token) {
    returnValue = false
  }else{
    this.apiService.validate_token(token).then(data => {
      if(data){
        try{
        data.subscribe((dataV: any) => {
           if(dataV.error){
            localStorage.removeItem('token');
            console.log('Error validating token', dataV.error);
            returnValue = false
           }

           this.router.navigate(['/colaboradores']);

        })
        
        }catch(err){
          localStorage.removeItem('token');
          console.log('Error validating token', err);
          // returnValue = false
        }
      }
    })
  }

  // return returnValue
  }
}
