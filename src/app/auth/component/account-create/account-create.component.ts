import { Component, OnInit, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../services/theme/theme.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContextService } from '../../../services/context/context.service';
import { ValidationDataService } from 'src/app/services/validation-data.service';
import { HeaderComponent } from '../header/header.component';
import { ApiService } from '../../../services/serviceApi/api.service';
import { AutoLoginService } from 'src/app/services/auto-login/auto-login.service';
import { LoadingService } from 'src/app/services/loading.service';
import { LoginService } from '../../service/login/login.service';
@Component({
  selector: 'app-account-create',
  standalone: true,
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss'],
  imports: [CommonModule, FormsModule, HeaderComponent]
})
export class AccountCreateComponent implements OnInit {
  name: string = '';
  email: string = '';
  company: string = '';
  errorForm: boolean = false;
  errorMessage: string = '';
  constructor(private themeService: ThemeService, private context: ContextService, private router: Router, private validationService: ValidationDataService, private apiService: ApiService, private autoLoginService: AutoLoginService, private loadingService: LoadingService, private loginService: LoginService) {

  }
  ngOnInit() {
    // this.autoLoginService.autoLogin(true, true);
    const prefersTheme = localStorage.getItem('theme');
    if (prefersTheme === 'dark') {
      sessionStorage.removeItem('dateLogin');
      this.isToggleChangeTheme = true
    }
    this.loginService.authenticateToken();
  }
  isToggleChangeTheme: boolean = false;
  protected isClickChangeTheme(): void {
    this.isToggleChangeTheme = !this.isToggleChangeTheme
    this.themeService.toggleDarkMode(!this.themeService.isDarkMode.value)
  }
  onSubmit(event: Event) {
    event.preventDefault();
    if (this.name === '' || this.email === '' || this.company === '') {
      this.errorForm = true
      this.errorMessage = 'Preencha todos os campos'
      return
    } else if (this.validationService.emailValidation(this.email)) {
      this.errorForm = true
      this.errorMessage = 'Email invalido'
      return
    } else {
      this.errorForm = false
    }
    // this.router.navigate(['/entrar'], { queryParams: { name: this.name, email: this.email, company: this.company } });
    this.apiService.verificEmailExist(this.email).subscribe((data: any) => {
    }, (error: any) => {
      this.errorMessage = error.error.message
      this.errorForm = error.error.erro
      return
    })
    const data = {
      nome: this.name,
      email: this.email,
      company: this.company
    }

    if (!this.errorForm) {
      this.context.saveDateLogin(data)
      this.router.navigate(['registrar/advance']);
      this.context.advanceRegister()
      return
    }
  }

}
