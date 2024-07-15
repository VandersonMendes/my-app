import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContextService } from 'src/app/services/context.service';
import { Router } from '@angular/router';
import { ValidationDataService } from 'src/app/services/validation-data.service';
import { ApiService } from 'src/app/services/api.service';
import { HeaderComponent } from '../header/header.component';
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
  constructor(private themeService: ThemeService, private context: ContextService, private router: Router, private validationService: ValidationDataService, private apiService: ApiService) {
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
    const value = this.cnpj.replace(/\D/g, ''); // Remove caracteres não numéricos
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
      console.log(this.cnpj)
      if (dateLogin) {
        const dataLoginObject = JSON.parse(dateLogin);
        const data = { ...dataLoginObject, cnpj: this.cnpj, password: this.senha };
        this.apiService.createUser(data).then(data => {
          data.subscribe(data => {
            console.log(data)
          })
        }).catch(error => {
          this.errorMessage = error.error.message
          this.errorForm = true;

        })
      } else {
        this.context.advanceLogin = false
        this.router.navigate(['login']);
      }
    }
  }


}
