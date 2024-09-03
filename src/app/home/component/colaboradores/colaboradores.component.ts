import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { Employees } from 'src/app/interfaces/employees';
import { ModalSidebarService } from '../../services/modalSidebar/modal-sidebar.service';
import { ContextService } from 'src/app/services/context/context.service';
import { ApiService } from 'src/app/services/serviceApi/api.service';
import { AutoLoginService } from 'src/app/services/auto-login/auto-login.service';
import { ModalColaboradoresComponent } from './modal-colaboradores/modal-colaboradores.component';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.scss'],
  standalone: true,
  imports: [CommonModule, ModalColaboradoresComponent]
})
export class ColaboradoresComponent  {
  menuHamburger: boolean = false;
  // modalSidebar: boolean = false
  isToggleModalNewCollaborator: boolean = false;
  isToggleChangeTheme: boolean = false;
    colaborators: Employees[]= [];
    // nome: string = '';
    // cpf: string = '';
    // situation: string = '';
    // email: string = '';
    // position: string = '';
  
  constructor(private themeService: ThemeService, private modalSidebar: ModalSidebarService, private context: ContextService, private apiService: ApiService, private autoLogionService: AutoLoginService) {
    themeService.isDarkMode$.subscribe((isDark: any) => {
      this.isToggleChangeTheme = isDark
    });
  }
  ngOnInit(): void {
    this.context.idUser$.subscribe((user: any) =>{
      if(user){
        this.apiService.getCollaborator(user).subscribe((res: any) => {
            console.log(res)
            this.colaborators = res;
        })
      }
    });
    

  }
  clickMenuSidebar() {
    this.menuHamburger = !this.menuHamburger;
    this.modalSidebar.toggleModal(this.menuHamburger);
  }
  isToggleModalAddCollaboratores() {
    this.isToggleModalNewCollaborator = !this.isToggleModalNewCollaborator
  }
  // addCollaboratores() {
  //     if(this.nome == '' || this.cpf == '' || this.situation == '' || this.email == '' || this.position == ''){
  //     }

  // }
  modalEventClose(){
    this.isToggleModalNewCollaborator = false
  }

  
}
