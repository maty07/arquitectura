import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/services/auth/Auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] = []
  isAdmin: boolean;

  constructor(private authService: AuthService) {
    this.isAdmin = this.authService.isAdmin;
  }


  ngOnInit() {
    this.items = [
      { label: 'Pokemones', icon: 'pi pi-fw pi-home', routerLink: 'pokemones' },
      { label: 'Admin', icon: 'pi pi-fw pi-home', routerLink: 'detail/1', visible: this.isAdmin },
      { label: 'Ordenes', icon: 'pi pi-fw pi-home', routerLink: 'orders' },
      { label: 'Cerrar Sesión', icon: 'pi pi-fw pi-home', command: () => this.logout() },
    ];
  }

  logout() {
    this.authService.logout()
  }
}
