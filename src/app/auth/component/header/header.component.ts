import { Component, OnInit} from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone:true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule],
})
export class HeaderComponent implements OnInit{
  constructor(private themeService: ThemeService) {
     themeService.isDarkMode$.subscribe(( isDark: any) =>{
       this.isToggleChangeTheme = isDark
        console.log(this.isToggleChangeTheme)
     })

    
  }
  ngOnInit(): void {

  }

   isToggleChangeTheme: boolean = false;
}
