import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './services/routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeService } from './services/theme/theme.service';
import { AutoLoginService } from './services/auto-login/auto-login.service';
import { ValidationDataService } from './services/validation-data.service';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './component/loading/loading.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
@NgModule({

  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    AuthModule,
    HttpClientModule,
    LoadingComponent,

  ],
  providers: [
    ThemeService,
    AutoLoginService,
    ValidationDataService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
