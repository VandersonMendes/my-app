import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContextService } from 'src/app/services/context.service';
import { Router } from '@angular/router';
import { ValidationDataService } from 'src/app/services/validation-data.service';
import { ApiService } from 'src/app/services/api.service';
import { HeaderComponent } from '../../../auth/component/header/header.component';
import { LoadingService } from 'src/app/services/loading.service';
import { AutoLoginService } from 'src/app/services/auto-login.service';

@Component({
  selector: 'app-advance-login',
  standalone: true,
  templateUrl: './advance-login.component.html',
  styleUrls: ['./advance-login.component.scss'],
  imports: [CommonModule, FormsModule, HeaderComponent],


})
export class AdvanceLoginComponent implements OnInit, OnDestroy {
  cnpj: string = '';
  senha: string = '';
  senhaConfirm: string = '';
  errorForm: boolean = false;
  errorMessage: string = '';
  buttonDisabled: boolean = false;
  userCreate: boolean = false
  constructor(private themeService: ThemeService, private context: ContextService, private router: Router, private validationService: ValidationDataService, private apiService: ApiService, private loadingService: LoadingService, private autoLoginService: AutoLoginService) {
    const prefersTheme = localStorage.getItem('theme');
    if (prefersTheme === 'dark') {
      this.isToggleChangeTheme = true
    }
  }
  ngOnInit(): void {
    const prefersTheme = localStorage.getItem('theme');
    if (prefersTheme === 'dark') {
      this.isToggleChangeTheme = true
    }
  }
  ngOnDestroy(): void {

  }
  isToggleChangeTheme: boolean = false;
  isClickChangeTheme() {
    this.isToggleChangeTheme = !this.isToggleChangeTheme
    this.themeService.toggleDarkMode(!this.themeService.isDarkMode.value)
  }
  onChangeForm(event: Event) {
    const hasNumber = /[a-zA-Z]/;
    if (hasNumber.test(this.cnpj)) {
      this.errorForm = true
      this.errorMessage = 'CNPJ inválido'
    } else {
      this.errorForm = false
    }
    const value = this.cnpj.replace(/\D/g, ''); 
    const formattedValue = value.replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/\.(\d{3})(\d{4})/, '.$1/$2')
      .replace(/(\d{4})(\d{2})$/, '$1-$2');
    this.cnpj = formattedValue;

  }


  onSubmit(event: Event) {
    event.preventDefault();
    if (this.cnpj.length === 0 || this.senha.length === 0 || this.senhaConfirm.length === 0) {
      this.errorForm = true
      this.errorMessage = 'Preencha todos os campos'
      return
    } else if (this.senha !== this.senhaConfirm) {
      this.errorForm = true
      this.errorMessage = 'As senhas devem ser iguais'
      return
    } else if (this.cnpj.length < 18 || this.cnpj.length > 18) {
      this.errorForm = true
      this.errorMessage = 'CNPJ inválido'
    } else {
      this.errorForm = false
    }
    if (!this.errorForm) {
      const dateLogin = sessionStorage.getItem('dateLogin')
      if (dateLogin) {
        const dataLoginObject = JSON.parse(dateLogin);
        const data = { ...dataLoginObject, cnpj: this.cnpj, password: this.senha };
        this.apiService.createUser(data).then(data => {
          data.subscribe(data => {
            this.apiService.login(dataLoginObject.email, this.senha).then(data => {
              this.loadingService.show()
               data.subscribe((data: any) => {
                 if(data.token){
                   localStorage.setItem('token', JSON.stringify(data.token));
                   this.autoLoginService.autoLogin();
                 }
               })
            })
            this.userCreate = true
            this.errorMessage = 'Cadrastro realizado'
          setTimeout(() => {
            this.userCreate = false;
            
          }, 4000)
          });
        }).catch(error => {
          this.errorForm = true
          this.errorMessage = error.error.message
        })
      } else {
        this.context.notAdvance()
        this.router.navigate(['registrar']);
      }
    }
  }
}
