import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './services/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeService } from './services/theme.service';
import { AdvanceLoginComponent } from './component/login/advance-login/advance-login.component';
import { ContextService } from './services/context.service';
import { AcountAcessComponent } from './component/login/acount-acess/acount-acess.component';
import { LostPasswordComponent } from './component/login/lost-password/lost-password.component';
import { LostPasswordConfirmComponent } from './component/login/lost-password/lost-password-confirm/lost-password-confirm.component';
import { LostPasswordEmailComponent } from './component/login/lost-password/lost-password-email/lost-password-email.component';
import { AccountCreateComponent } from './component/login/account-create/account-create.component';
import { ValidationDataService } from './services/validation-data.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/login/header/header.component';
import { InicioComponent } from './component/home/inicio/inicio.component';
export function appInitializer(context: ContextService) {
  return () => context.appInitializerRouter();
}
@NgModule({

  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdvanceLoginComponent,
    AcountAcessComponent,
    LostPasswordComponent,
    LostPasswordConfirmComponent,
    LostPasswordEmailComponent,
    AccountCreateComponent,
    HttpClientModule,
    HeaderComponent,
    InicioComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      deps: [ContextService],
      multi: true,
    },
    ThemeService,
    ContextService,
    ValidationDataService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
