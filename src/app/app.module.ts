import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './services/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeService } from './services/theme.service';
import { ContextService } from './services/context.service';
import { ValidationDataService } from './services/validation-data.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './auth/component/header/header.component';
import { LoadingComponent } from './component/loading/loading.component';
import { AuthModule } from './auth/auth.module';
export function appInitializer(context: ContextService) {
  return () => context.appInitializerRouter();
}
@NgModule({

  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    HttpClientModule,
    HeaderComponent,
    LoadingComponent

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
