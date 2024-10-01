import { Injectable } from '@angular/core';
import { ApiService } from '../serviceApi/api.service';
import { Router } from '@angular/router';
import { LoadingService } from '../loading.service';
import { ContextService } from '../context/context.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AutoLoginService {
  constructor(private api: ApiService, private router: Router, private loadingService: LoadingService, private context: ContextService) { }
   autoLogin(intevalTime: boolean, rotaPerfil: boolean): any {

  // try{
  //   const token = lo  
  //   if (!token) {
  //     console.log('token não existe');

  //     return false
  //   }
  //    this.api.validate_token(token).then((data) => {
  //     return false
  //   })
  // }catch(err){
  //   console.error('Error ao tentar autologin', err);
  //   return false;
  // }
  //   // const token = localStorage.getItem('token')
  //   // console.log(token)
  //   // if (!token) {
  //   //   // this.router.navigate(['registrar']);
  //   //   return false;
  //   // }
  //   // await this.api.validate_token(token).then(data => {
  //   //   data.subscribe((data: any) => {
  //   //     if(data){      
  //   //    this.loadingService.hide();
  //   //    return true
  //   //     }
  //   //   })
  //   // })
  // }

}
}
