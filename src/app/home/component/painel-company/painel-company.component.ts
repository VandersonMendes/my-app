
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { ModalComponent } from './modal/modal.component';
import { UserData } from 'src/app/interfaces/dataUser';
import { ModalSidebarService } from '../../services/modalSidebar/modal-sidebar.service';
import { ContextService } from 'src/app/services/context/context.service';
import { ApiService } from 'src/app/services/serviceApi/api.service';
import { AutoLoginService } from 'src/app/services/auto-login/auto-login.service';
import {Router} from '@angular/router'
import { ModalColaboradoresService } from '../../services/modalColaboradores/modal-colaboradores.service';
@Component({
  selector: 'app-painel-company',
  templateUrl: './painel-company.component.html',
  styleUrls: ['./painel-company.component.scss'],
  standalone: true,
  imports: [CommonModule, ModalComponent]
})
export class PainelCompanyComponent {
constructor(private themeService: ThemeService, private modalSidebar: ModalSidebarService, private context: ContextService, private apiService: ApiService, private autoLogionService: AutoLoginService, private router:Router, private modalColaboradoresService: ModalColaboradoresService) {
    themeService.isDarkMode$.subscribe((isDark: any) => {
      this.isToggleChangeTheme = isDark
    })
  }

  isToggleChangeTheme: boolean = false;
  modalDeletar: boolean = false
  menuHamburger: boolean = false;
  isToggleModalAddedTaks: boolean = false;
  isChecked: boolean = false
  checkedClass: boolean = false
  isIdCompany: string = ''
  protected status: any
  protected dataUser: UserData[] = []
  protected listTasks: any

  ngOnInit(): void {
    this.context.idUser$.subscribe((id: string) => {
      this.apiService.getTask(id).subscribe((data: any) => {
        if (data) {
          this.listTasks = data
  

        }
      })
      this.apiService.getStatus(id).then((data: any) => {
        data.subscribe((data: any) => {
          this.status = data.statusCount
        })
      })
    })
  }
  IsModalDeletar(idTarefa: string) {
    this.context.idUser$.subscribe((id: string) => {
      this.apiService.deleteTask(id, idTarefa).subscribe((data: any) => {
        if (data) {
          this.loadNewTaks()
        }
      })
    })
  }
  checkedTask(idTarefa: string) {
    this.isChecked = !this.isChecked
    this.completedTask(idTarefa)
  }
  async completedTask(idTask: string) {
    this.context.idUser$.subscribe((idCompany: string) => {
      if (idCompany) {
        this.apiService.completedTask(idTask, idCompany, this.isChecked).subscribe((data: any) => {
          if (data) {
            this.loadNewTaks()
          }
        }, (err: any) => {
          console.log(err)
        })
      }


    })

  }
  addedTaks() {
    this.isToggleModalAddedTaks = !this.isToggleModalAddedTaks
  }

  modalEventClose() {
    this.isToggleModalAddedTaks = false
  }
  clickMenuSidebar() {
    this.menuHamburger = !this.menuHamburger;
    this.modalSidebar.toggleModal(this.menuHamburger);
  }
  loadNewTaks() {
    this.context.idUser$.subscribe((id: string) => {
      this.apiService.getTask(id).subscribe((data: any) => {
        if (data) {
          this.listTasks = data
        }
      })
    }
    )
  }
  navigateModalColaboradoresOpen(){
    this.router.navigate(['/colaboradores'])
    this.modalColaboradoresService.openModalColaboradores(true)
  }
}
