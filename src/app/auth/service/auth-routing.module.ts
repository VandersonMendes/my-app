import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountCreateComponent } from '../component/account-create/account-create.component';
import { AcountAcessComponent } from '../component/acount-acess/acount-acess.component';
const routes: Routes = [
  { path: 'registrar', component: AccountCreateComponent },
  { path: 'entrar', component: AcountAcessComponent },
  // { path: '', redirectTo: '/registrar', pathMatch: 'full' },
  // // fazer pagina de NOT FOUND
  // { path: '**', redirectTo: '/registrar' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
