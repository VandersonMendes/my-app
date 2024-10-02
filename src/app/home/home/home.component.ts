import { Component, OnInit } from '@angular/core';
import { ContextService } from 'src/app/services/context/context.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
        this.context.returnIdUser();
  }
  constructor(private context: ContextService) {}
}
