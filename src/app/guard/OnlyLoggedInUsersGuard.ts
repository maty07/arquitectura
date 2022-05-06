import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { AuthService } from "../services/auth/Auth.service";

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {
    constructor(private userService: AuthService, private router: Router) { }

    canActivate() {
        if (localStorage.getItem('token')) {
            this.userService.isLoggedIn = true;
        } else {
            // window.alert("You don't have permission to view this page");
            this.router.navigate(['/'])
        }

        return true;
    }
}

