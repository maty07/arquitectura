import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { AuthService } from "../services/auth/Auth.service";

@Injectable()
export class RedirectIfLoggedIn implements CanActivate {

    constructor(private router: Router, private authService: AuthService) { }

    canActivate() {
        if (localStorage.getItem('token')) {
            console.log('RedirectIfLoggedIn');

            this.router.navigate(['/pokemones']);
        }

        return true;
    }
}
