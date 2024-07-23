import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { LoadingService } from './loading.service';
import { ContextService } from './context.service';
@Injectable({
  providedIn: 'root'
})

export class AutoLoginService {
  constructor(private api: ApiService, private router: Router, private loadingService: LoadingService, private context: ContextService) { }
  async autoLogin(){
    const  token = localStorage.getItem('token');
    if(!token){
      this.router.navigate(['entrar']);
      return;
    }
 try{
   await this.api.validate_token(token).then(data => {
      console.log(data)
      data.subscribe((data: any) => {
          if(data.error){
          localStorage.removeItem('token');
          this.router.navigate(['/entrar']);
          this.loadingService.hide();
          this.context.notAdvanceStart()
          return;
        }
        if(data.error){
         
          localStorage.removeItem('token');
          this.router.navigate(['/entrar']);
          this.loadingService.hide();
          this.context.notAdvanceStart()
          return;
        }
      setTimeout(() => {
        this.context.advanceStart();
        this.loadingService.hide()
         this.router.navigate(['/inicio']);
         
      }, 3000);
     
      }
      )
    })
 }catch(error){
      console.log(error)
      localStorage.removeItem('token');
      this.router.navigate(['/entrar']);
      this.loadingService.hide();
      this.context.notAdvanceStart()
      return
 }
  }
}
