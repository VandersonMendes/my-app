import { Component, Output, EventEmitter } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { CommonModule } from '@angular/common';
import { ContextService } from 'src/app/services/context/context.service';
import { FormsModule } from '@angular/forms';
import { ApiService } from 'src/app/services/serviceApi/api.service';
@Component({
  selector: 'app-modal-colaboradores',
  templateUrl: './modal-colaboradores.component.html',
  styleUrls: ['./modal-colaboradores.component.scss'],
  imports: [CommonModule, FormsModule],
  standalone: true
})
export class ModalColaboradoresComponent {
  constructor(public themeService: ThemeService, private context: ContextService, private apiService: ApiService) {
    this.themeService.isDarkMode$.subscribe((isDarkTheme) => {
      this.isToggleChangeTheme = isDarkTheme;
    });
    console.log(this.cpf)
  }
  isToggleChangeTheme: boolean = false;
  message = {
    message: '',
    sucess: false
  }
  exitModal = false
  // inputs forms
  nome: string = ''
  email: string = ''
  cpf: string = ''
  situation: string = ''
  position: string = ''
  @Output() closeModalEvent = new EventEmitter();
  closeModal() {
    this.closeModalEvent.emit(true)
    console.log('modal fechado')
    this.exitModal = true
  }
  createCollaborador() {
    let data;
    let companyId: string = ''
    if (this.nome == '' || this.email == '' || this.cpf == '' || this.situation == '' || this.position == '') {
      console.log(this.nome, this.email, this.cpf, this.situation, this.position);
      console.log(this.situation.valueOf())
      this.message = {
        message: 'Preencha todos os dados',
        sucess: false
      }
      return
    } else {
      this.message = {
        message: '',
        sucess: false
      }
      this.context.idUser$.subscribe((id: string) => {
        companyId = id
      })
      if (companyId) {
        // idCompany, nome, email, cpf, situation, position
        data = {
          nome: this.nome,
          email: this.email,
          cpf: this.cpf,
          situation: this.situation.valueOf(),
          position: this.position,
          idCompany: companyId
        }
      }
      console.log(data)
    }

    this.apiService.createCollaborator(data).then((res)  =>{
      res.subscribe((resp) =>{
        console.log(resp)
      })
    })
  }
  onChangeFormatCpf(event: Event) {

    const hasNumber = /[a-zA-Z]/;
    if (hasNumber.test(this.cpf)) {
      this.message = {
        message: 'CNPJ inválido',
        sucess: false
      }
    } else {
      this.message = {
        message: '',
        sucess: false
      }
    }
    const value = this.cpf.replace(/\D/g, '');
    const formattedValue = value.replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/\.(\d{3})(\d{4})/, '.$1/$2')
      .replace(/(\d{4})(\d{2})$/, '$1-$2');
    this.cpf = formattedValue;
  }
}
