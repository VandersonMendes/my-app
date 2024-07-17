import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { ContextService } from 'src/app/services/context.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LostPasswordConfirmComponent } from './lost-password-confirm/lost-password-confirm.component';
import { LostPasswordEmailComponent } from './lost-password-email/lost-password-email.component';
@Component({
  selector: 'app-lost-password',
  standalone: true,
  templateUrl: './lost-password.component.html',
  styleUrls: ['./lost-password.component.scss'],
  imports: [CommonModule, FormsModule, LostPasswordEmailComponent, LostPasswordConfirmComponent]
})
export class LostPasswordComponent {
   
}
