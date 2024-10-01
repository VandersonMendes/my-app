import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  isDarkMode = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.isDarkMode.asObservable();

  constructor() {
    // Verifique a preferência inicial do sistema operacional
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    // Verificando se já existe uma preferência salva
    const storedPrefereinces = localStorage.getItem('theme');
    // Se não existir uma preferência salva, irá pegar uma preferência do sistema operacional
    if (!storedPrefereinces) {
      if (prefersDark.matches) {
        this.isDarkMode.next(true);
        localStorage.setItem('theme', 'dark');
        this.toggleDarkMode(true)
      } else {
        this.isDarkMode.next(false);
        localStorage.setItem('theme', 'ligth');
      }
    } else {
      if (storedPrefereinces === 'dark') {
        this.isDarkMode.next(true);

      } else {
        this.isDarkMode.next(false);
      }

    }
  }

  toggleDarkMode(isDark: boolean) {
    this.isDarkMode.next(isDark);
    if (isDark) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'ligth');
    }
  }
}