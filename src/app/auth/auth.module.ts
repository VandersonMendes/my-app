import { NgModule, APP_INITIALIZER} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './service/auth-routing.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthRoutingModule
  ],
})
export class AuthModule { }
