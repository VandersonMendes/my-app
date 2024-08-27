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
     this.themeService.isDarkMode$.subscribe(( isDark: any) =>{
       this.isToggleChangeTheme = isDark
        console.log(this.isToggleChangeTheme)
     })
  }
   isToggleChangeTheme: boolean = false;
   protected dataUser: any;
   isNameCompany: string = ''
   ngOnInit(): void {
      this.context.idUser$.subscribe((id: any) => {
        this.apiService.getUser(id).then((user: any) => {
          user.subscribe((data: any) => {
            this.dataUser = data;
            if(this.dataUser.data.company.length > 19){
              this.isNameCompany = this.dataUser.data.company.slice(0, 19) + '...'
            }else{
              this.isNameCompany = this.dataUser.data.company;
            }
            console.log(this.dataUser.data.npme)
          })
        })
      })
    
   }
}
