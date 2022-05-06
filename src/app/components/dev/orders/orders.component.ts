import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/Auth.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.sass']
})
export class OrdersComponent implements OnInit {

  isAdmin: boolean
  constructor(private authService: AuthService) {
    this.isAdmin = this.authService.isAdmin
  }

  ngOnInit(): void {
  }

}
