import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvanceLoginComponent } from '../component/login/advance-login/advance-login.component'
import { advanceLoginGuard } from '../guard/advance-login.guard';
import { inicioGuard } from '../guard/inicio.guard';
import { AcountAcessComponent } from '../component/login/acount-acess/acount-acess.component';
// import { LostPasswordComponent } from '../component/login/lost-password/lost-password.component';
import { AccountCreateComponent } from '../component/login/account-create/account-create.component';
import { InicioComponent } from '../component/home/inicio/inicio.component';
const routes: Routes = [
      {path : 'registrar', component: AccountCreateComponent},
      {path: 'registrar/advance', component: AdvanceLoginComponent, canActivate:[advanceLoginGuard]},
      {path: 'entrar', component: AcountAcessComponent},
      // FAZER pagina de recuperacao de Senha
      // {path: 'perdeu-senha', component: LostPasswordComponent},
      {path: 'inicio', component: InicioComponent, canActivate:[inicioGuard]},
      { path: '', redirectTo: '/registrar', pathMatch: 'full' },
      // fazer pagina de NOT FOUND
  { path: '**', redirectTo: '/registrar' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
