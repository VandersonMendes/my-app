import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { advanceHomeGuard } from '../guard/advance-home.guard';
import { HomeComponent } from '../../home/home.component';
import { ColaboradoresComponent } from '../../component/colaboradores/colaboradores.component';
import { ConfigComponent } from '../../component/config/config.component';
import { PainelCompanyComponent } from '../../component/painel-company/painel-company.component';
const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'company', component: PainelCompanyComponent,},
    { path: 'colaboradores', component: ColaboradoresComponent},
    { path: 'config', component: ConfigComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
