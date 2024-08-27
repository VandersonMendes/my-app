import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from 'src/app/services/loading.service';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
@Component({
  selector: 'app-loading',
  standalone: true,
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  imports: [CommonModule]
})
export class LoadingComponent {
  loading$:boolean = false;

  constructor(private loadingService: LoadingService, private router: Router) {
 this.loadingService.loading$.subscribe((loading:boolean) =>{
  console.log(loading)
  this.loading$ = loading
 })
  this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading$ = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loading$ = false;
      }
    });
  }
}
