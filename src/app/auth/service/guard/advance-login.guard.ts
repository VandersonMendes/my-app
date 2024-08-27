import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ContextService } from '../../../services/context/context.service';
import { inject } from '@angular/core';
export const advanceLoginGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const router = inject(Router);
  const contextService = inject(ContextService);
  if(contextService.getAcessRegisterValue()){
    return true
  }else{
    router.navigate(['/registrar'])
    return false
  }
};
