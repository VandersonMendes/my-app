import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountCreateComponent } from './component/account-create/account-create.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';
import { AuthRoutingModule } from './service/auth-routing.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccountCreateComponent,
    HttpClientModule,
    HeaderComponent,
    AuthRoutingModule
  ]
})
export class AuthModule { }
