import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { ContextService } from 'src/app/services/context.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-acount-acess',
  standalone: true,
  templateUrl: './acount-acess.component.html',
  styleUrls: ['./acount-acess.component.scss'],
  imports: [CommonModule, FormsModule, HeaderComponent]
})
export class AcountAcessComponent {
  email: string = '';
  senha: string = '';
  errorForm: boolean = false;
  errorMessage: string = '';
  toggleButtonVisiblePassword: boolean = false;
  srcIconCheckboxPassword: string = ''
  constructor(private themeService: ThemeService, private context: ContextService, private router: Router) {
    const prefersTheme = localStorage.getItem('theme');
    if (prefersTheme === 'dark') {
      this.isToggleChangeTheme = true
    }
    sessionStorage.removeItem('dateLogin');
    this.context.advanceLogin = false;
  }
  ngOnInit(): void {
    const prefersTheme = localStorage.getItem('theme');
    if (prefersTheme === 'dark') {
      sessionStorage.removeItem('dateLogin');
      this.context.advanceLogin = false;
      this.isToggleChangeTheme = true
    }

  }
  isToggleChangeTheme: boolean = false;
  isClickChangeTheme() {
    this.isToggleChangeTheme = !this.isToggleChangeTheme
    this.themeService.toggleDarkMode(!this.themeService.isDarkMode.value)
  }
  OnChangeCheckBox(event: Event){
    event.preventDefault();
    this.toggleButtonVisiblePassword = !this.toggleButtonVisiblePassword;
  
  }
  onSubmit(event: Event) {
    
    event.preventDefault();
    const regexEmailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(regexEmailValidation.test(this.email))
    if (this.email.length === 0 || this.senha.length === 0) {
      this.errorForm = true
      this.errorMessage = 'Preencha todos os campos'
      return
    } else if (!regexEmailValidation.test(this.email)) {
      this.errorForm = true
      this.errorMessage = 'Email invalido'
      return
    } else {
      this.errorForm = false
    }
    if (!this.errorForm) {
      const dateLogin = {
        email: this.email,
        company: this.senha
      }
      // this.context.saveDateLogin(dateLogin)
      this.router.navigate(['login/advance'])
      this.context.advanceLogin = true;
      return
    }

  }

  onChangeForm(event: Event) {

  }
}
