import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './services/rotas/home-routing.module';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { HeaderComponent } from "../auth/component/header/header.component";
import { HeaderHomeComponent } from './component/header-home/header-home.component';
import { FormsModule } from '@angular/forms';
import { ColaboradoresComponent } from './component/colaboradores/colaboradores.component';
import { ModalColaboradoresComponent } from './component/colaboradores/modal-colaboradores/modal-colaboradores.component';
import { ConfigComponent } from './component/config/config.component';
import { PainelCompanyComponent } from './component/painel-company/painel-company.component';
@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    SideBarComponent,
    HeaderComponent,
    ColaboradoresComponent,
    ModalColaboradoresComponent,
    HeaderHomeComponent,
    FormsModule,
     PainelCompanyComponent,
  ],
  declarations: [
    HomeComponent,
    ConfigComponent,
  ],

})
export class HomeModule { }
