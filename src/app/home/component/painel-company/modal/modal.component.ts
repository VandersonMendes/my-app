
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { FormsModule } from '@angular/forms';
import { ApiService } from 'src/app/services/serviceApi/api.service';
import { ContextService } from '../../../../services/context/context.service';
import { LoadingService } from 'src/app/services/loading.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ModalComponent {
 // modal$: boolean = true;
  @Input() IsModal: boolean = false;
  @Output() closeModalEvent = new EventEmitter();
  task: string = '';
  errorMessage: string = '';
  sucessMessage: string = '';
  protected companyID: string = '';
   @Output() load = new EventEmitter();
  constructor(private themeService: ThemeService, private apiService: ApiService, private context: ContextService, private loadingService: LoadingService) {
    themeService.isDarkMode$.subscribe((isDark: any) => {
      this.isToggleChangeTheme = isDark

    })
  }
  ngOnInit(): void {
    this.context.idUser$.subscribe((id: string) => {
      if(id) this.companyID = id
    })
    
  }
  closeModal() {
    this.closeModalEvent.emit(false)
         this.load.emit(false)
  }
  changeTask() {
    if (this.task.length > 0) {
      this.errorMessage = ''
    }
  }
  
  createTask() {
  
    if (!this.task) {
      this.errorMessage = 'Preencha todos os campos'
      return
    } else {
      this.errorMessage = ''
    }
    this.context.idUser$.subscribe((id: string) => {
      if (id || this.companyID) {
        this.apiService.createTask(this.companyID, this.task).then(data => {
          data.subscribe((data: any) => {
            this.sucessMessage = data.message
            this.load.emit(false)
            setInterval(() => {
              this.closeModal()
            }, 10000)
          }, (err: any) => {
            this.errorMessage = err.error.message;
          })
        })
      }
    })

  }
  isToggleChangeTheme: boolean = false;
  isClickChangeTheme(): void {
    this.isToggleChangeTheme = !this.isToggleChangeTheme;
    this.themeService.toggleDarkMode(!this.themeService.isDarkMode.value)
  }
}
