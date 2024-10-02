import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ContextService } from '../../../services/context/context.service';
import { inject } from '@angular/core';
export const advanceHomeGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const router = inject(Router);
  // const contextService = inject(ContextService);
  // autoLoginService.autoLogin(false, false)

  //  if (state.url === '/colaboradores' || state.url === '/config', state.url === '/company') {
  //   return true; 
  // }
  // if(returnAutologn === true){
  //   router.navigate(['/colaboradores'])
  //   return true
  // }else{
  //   router.navigate(['/registrar'])
  //   return false
  // }
  return true
};
