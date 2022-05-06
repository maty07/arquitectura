import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  loggedIn(user: string, password: string): boolean {
    if (password === '123') { // simular ajax de login
      if (user === 'admin') {
        localStorage.setItem('token', 'fsdfsd3434234dsfsdfsf3423dsfsdfdsfd3423');
        this.isAdmin = true;
        this.isLoggedIn = true
        this.router.navigate(['/pokemones']);
      } else if (user == 'persona') {
        localStorage.setItem('token', 'fsdfsd3434234dsfsdfsf3423dsfsdfdsfd3423');
        this.isLoggedIn = true
        this.router.navigate(['/pokemones']);
      } else {
        return false;
      }
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.isAdmin = false;
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}
