import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountCreateComponent } from '../component/account-create/account-create.component';
import { AcountAcessComponent } from '../component/acount-acess/acount-acess.component';
import { AdvanceLoginComponent } from '../component/advance-login/advance-login.component';
import { advanceLoginGuard } from './guard/advance-login.guard';
const routes: Routes = [
  { path: 'registrar', component: AccountCreateComponent },
  { path: 'registrar/advance', component: AdvanceLoginComponent, canActivate: [advanceLoginGuard] },
  { path: 'entrar', component: AcountAcessComponent },
  { path: '', redirectTo: '/registrar', pathMatch: 'full' },
  { path: '**', redirectTo: '/registrar' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
