import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { ContextService } from 'src/app/services/context/context.service';
import { ApiService } from 'src/app/services/serviceApi/api.service';
import { ModalSidebarService } from '../../services/modalSidebar/modal-sidebar.service';
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  constructor(private themeService: ThemeService, private context: ContextService, private apiService: ApiService,
    private modalSidebar: ModalSidebarService) {
    themeService.isDarkMode$.subscribe((isDark: any) => {
      this.isToggleChangeTheme = isDark
    });
  }
  dataCompany: any
  isToggleChangeTheme: boolean = false;
  menuHamburger: boolean = false;
  cnpj: string = '';
  nome: string = '';
  email: string = '';
  company: string = '';
  idCompany: string = '';
  message = {
    message: '',
    sucess: false
  }
  ngOnInit(): void {
    this.loadDataCompany()
  }



  clickMenuSidebar() {
    this.menuHamburger = !this.menuHamburger;
    this.modalSidebar.toggleModal(this.menuHamburger);
  }
  upadteCompany() {
    if (this.nome === this.dataCompany.data.nome && this.email === this.dataCompany.data.email && this.cnpj === this.dataCompany.data.cnpj && this.company === this.dataCompany.data.company) {
      this.message = {
        message: 'Nenhum dado foi alterado',
        sucess: false
      }
      return
    }
    const companyData = {
      nome: this.nome,
      email: this.email,
      cnpj: this.cnpj,
      company: this.company
    }
    if (this.idCompany) {
      this.apiService.updateCompany(companyData, this.idCompany).subscribe((user: any) => {
        this.message = {
          message: user.message,
          sucess: true
        }
        this.loadDataCompany()
        setTimeout(() => {
          this.message = {
            message: '',
            sucess: true
          }
        }, 4000)
      });
    }
  }
  loadDataCompany(){
    this.context.idUser$.subscribe((id: string) => {
      if (id) {
        this.apiService.getCompany(id).then((user: any) => {
          user.subscribe((data: any) => {
            if (data) {
              this.dataCompany = data
              this.idCompany = data.data._id
              this.nome = data.data.nome
              this.email = data.data.email
              this.company = data.data.company
              this.cnpj = data.data.cnpj

            }
          })
        })
      }
    })
  }
}
