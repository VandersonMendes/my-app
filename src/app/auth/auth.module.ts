import { NgModule, APP_INITIALIZER} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './service/auth-routing.module';
import { AutoLoginService } from '../services/auto-login/auto-login.service';
export function initializeApp(appInitService: AutoLoginService): () => Promise<void> {
  return () => appInitService.autoLogin(false, false);
}
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthRoutingModule
  ],
   providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AutoLoginService],
      multi: true
    }
  ],
})
export class AuthModule { }
