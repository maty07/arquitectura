import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { AuthService } from 'src/app/services/auth/Auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private messageService: MessageService, private router: Router, private auth: AuthService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  onSubmit() {
    if (!this.username || !this.password) {
      this.messageService.add({ severity: 'error', summary: 'Alerta', detail: 'Complete todos los campos' })
    } else {
      if (this.auth.loggedIn(this.username, this.password)) {
        this.router.navigate(['pokemones'])
      } else {
        this.messageService.add({ severity: 'error', summary: 'Alerta', detail: 'Usuario o contraseña incorrecta' })
      }
    }
  }

}
