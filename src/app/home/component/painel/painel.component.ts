import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { ModalComponent } from './modal/modal.component';
import { UserData } from 'src/app/interfaces/dataUser';
import { ModalSidebarService } from '../../services/modalSidebar/modal-sidebar.service';
import { ContextService } from 'src/app/services/context/context.service';
import { ApiService } from 'src/app/services/serviceApi/api.service';
import { AutoLoginService } from 'src/app/services/auto-login/auto-login.service';
@Component({
  selector: 'app-painel',
  standalone: true,
  templateUrl: './painel.component.html',
  styleUrls: ['painel.component.scss'],
  imports: [CommonModule, ModalComponent],
})
export class PainelComponent implements OnInit {
  constructor(private themeService: ThemeService, private modalSidebar: ModalSidebarService, private context: ContextService, private apiService: ApiService, private autoLogionService: AutoLoginService) {
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
  protected status: any
  protected dataUser: UserData[] = []
  protected listTasks: any

  ngOnInit(): void {
    // this.autoLogionService.autoLogin(true, false)
    this.context.idUser$.subscribe((id: string) => {
      this.apiService.getTask(id).subscribe((data: any) => {
        if (data) {
          this.listTasks = data
          console.log(this.listTasks)

        }
      })
      this.apiService.getStatus(id).then((data: any) => {
        data.subscribe((data: any) => {
          this.status = data.statusCount
          console.log(this.status)

        })
      })
    })

  }
  IsModalDeletar(idTarefa: string) {
    this.context.idUser$.subscribe((id: string) => {
      this.apiService.deleteTask(idTarefa, id).subscribe((data: any) => {
        if (data) {
          this.loadNewTaks()
        }
      })
    })
  }
  checkedTask(idTarefa: string) {
    this.isChecked = !this.isChecked
    console.log(this.isChecked)
    // console.log(this.isChecked)
    this.completedTask(idTarefa)
  }
  async completedTask(idTask: string) {
    console.log(idTask)
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
  modalAddedTaks() {
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
}