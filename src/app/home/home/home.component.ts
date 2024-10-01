import { Component, OnInit } from '@angular/core';
import { AutoLoginService } from '../../services/auto-login/auto-login.service';
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
  constructor(private autoLoginService: AutoLoginService, private context: ContextService) {}
}
