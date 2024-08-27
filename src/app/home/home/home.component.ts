import { Component, OnInit } from '@angular/core';
import { AutoLoginService } from '../../services/auto-login/auto-login.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    this.autoLoginService.autoLogin(false, false);
  }
  constructor(private autoLoginService: AutoLoginService) {}
}
