import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './component/painel/painel.component';
import { HomeRoutingModule } from './services/home-routing.module';
@NgModule({
  declarations: [
    PainelComponent,
  ],
  imports: [
        HomeRoutingModule,
    CommonModule,
  ]
})
export class HomeModule { }
