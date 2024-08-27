import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ContextService } from '../../../services/context/context.service';
import { inject } from '@angular/core';
export const advanceHomeGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const router = inject(Router);
  const contextService = inject(ContextService);
   if (state.url === '/colaboradores') {
     console.log(state.url)
    return true; // Permite acesso a esta rota
  }
  if(contextService.getAcessHomeValue() == true){
    return true
  }else{
    router.navigate(['/registrar'])
    return false
  }
};
