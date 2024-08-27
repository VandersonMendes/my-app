import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { ModalComponent } from '../painel/modal/modal.component';
import { ModalSidebarService } from '../../services/modalSidebar/modal-sidebar.service';
import { ContextService } from 'src/app/services/context/context.service';
import { ApiService } from 'src/app/services/serviceApi/api.service';
import { AutoLoginService } from 'src/app/services/auto-login/auto-login.service';
@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ColaboradoresComponent {
  menuHamburger: boolean = false;
  // modalSidebar: boolean = false
  isToggleModalAddedTaks: boolean = false;
  isToggleChangeTheme: boolean = false;
  constructor(private themeService: ThemeService, private modalSidebar: ModalSidebarService, private context: ContextService, private apiService: ApiService, private autoLogionService: AutoLoginService) {
    themeService.isDarkMode$.subscribe((isDark: any) => {
      this.isToggleChangeTheme = isDark
    })
  }
  clickMenuSidebar() {
    this.menuHamburger = !this.menuHamburger;
    this.modalSidebar.toggleModal(this.menuHamburger);
  }
  isToggleModalAddCollaboratores() {
  }
    
}
