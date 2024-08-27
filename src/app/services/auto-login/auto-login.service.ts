import { Injectable } from '@angular/core';
import { ApiService } from '../serviceApi/api.service';
import { Router } from '@angular/router';
import { LoadingService } from '../loading.service';
import { ContextService } from '../context/context.service';
@Injectable({
  providedIn: 'root'
})
export class AutoLoginService {
  constructor(private api: ApiService, private router: Router, private loadingService: LoadingService, private context: ContextService) { }
  async autoLogin(intevalTime: boolean, rotaPerfil: boolean) {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['registrar']);
      return;
    }
    try {
      await this.api.validate_token(token).then(data => {
        data.subscribe((data: any) => {
          if (data.error) {
            localStorage.removeItem('token');
            this.router.navigate(['/registrar']);

            this.loadingService.hide();
            this.context.notAdvanceStartHome();
            return;
          }
          this.context.advanceStartHome();
          this.loadingService.hide();
          this.context.saveIdUser(data.user.user.id);
          if(rotaPerfil){
            this.router.navigate(['/painel']);
          }
        }
        )

        if (intevalTime) {
          setTimeout(() => {
            this.context.advanceStartHome();
            this.loadingService.hide();
            if(rotaPerfil) this.router.navigate(['/painel']);
          }, 3000)
        } else {
          this.context.advanceStartHome();
          this.loadingService.hide();
                if(rotaPerfil) this.router.navigate(['/painel']);
        }
      })
    } catch (error) {
      console.log(error)
  
      localStorage.removeItem('token');
      this.router.navigate(['/entrar']);

      this.loadingService.hide();
      this.context.notAdvanceStartHome();
      return
    }
  }
}
