import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelComponent } from '../../component/painel/painel.component';
import { advanceHomeGuard } from '../guard/advance-home.guard';
import { HomeComponent } from '../../home/home.component';
import { ColaboradoresComponent } from '../../component/colaboradores/colaboradores.component';
const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [advanceHomeGuard] , children: [
    { path: 'painel', component: PainelComponent,},
    { path: 'colaboradores', component: ColaboradoresComponent},
  // { path: '', redirectTo: '/painel', pathMatch: 'full' },
  // { path: '**', redirectTo: '/painel' }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
