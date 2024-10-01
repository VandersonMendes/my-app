import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../services/theme/theme.service';
import { CommonModule } from '@angular/common'
import { ContextService } from '../../../services/context/context.service';
import { ApiService } from 'src/app/services/serviceApi/api.service';

@Component({
  selector: 'app-header-home',
  standalone: true,
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.scss'],
  imports: [CommonModule],

})
export class HeaderHomeComponent implements OnInit{
constructor(private themeService: ThemeService, private context: ContextService, private apiService: ApiService) {
  }
   isToggleChangeTheme: boolean = false;
   isNameCompany: string = ''

   ngOnInit(): void {
    this.context.returnidCompany()
      this.context.idUser$.subscribe((id: any) => {
        this.apiService.getCompany(id).then((user: any) => {
          user.subscribe((data: any) => {
            this.isNameCompany = data.data.company
            if(data.data.company.length > 19){
              this.isNameCompany = data.data.company.slice(0, 19) + '...'
            }else{
              this.isNameCompany = data.data.company;
            }
          })
        })
      })
           this.themeService.isDarkMode$.subscribe(( isDark: boolean) =>{
       this.isToggleChangeTheme = isDark
     })
   }
}
