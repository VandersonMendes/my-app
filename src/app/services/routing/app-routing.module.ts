import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';;
import { AuthModule } from '../../auth/auth.module';
import { HomeModule } from '../../home/home.module';
import { AccountCreateComponent } from 'src/app/auth/component/account-create/account-create.component';
const routes: Routes = [
  { path: 'home', loadChildren: () => HomeModule },
  { path: 'auth', loadChildren: () => AuthModule },
  //   { path: '', redirectTo: '/registrar', pathMatch: 'full' },
  // { path: '**', redirectTo: '/registrar' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
