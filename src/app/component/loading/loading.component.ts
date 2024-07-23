import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from 'src/app/services/loading.service';
@Component({
  selector: 'app-loading',
  standalone: true,
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  imports: [CommonModule]
})
export class LoadingComponent {
  loading$:boolean = false;

  constructor(private loadingService: LoadingService) {
 this.loadingService.loading$.subscribe((loading:boolean) =>{
  console.log(loading)
  this.loading$ = loading
 })
  }
}
