import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/dev/login/login.component';
import { PokemonDetailComponent } from './components/dev/pokemonModulo/pokemon-detail/pokemon-detail.component';
import { PokemonComponent } from './components/dev/pokemonModulo/pokemon/Pokemon.component';
import { OnlyLoggedInUsersGuard } from './guard/OnlyLoggedInUsersGuard';
import { RedirectIfLoggedIn } from './guard/RedirectIfLoggedIn';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [RedirectIfLoggedIn],
    data: {
      animation: 'openClosePage',
      showHeader: false
    }
  },
  {
    path: 'pokemones',
    component: PokemonComponent,
    canActivate: [OnlyLoggedInUsersGuard],
    data: { animation: 'openClosePage' }
  },
  {
    path: 'detail/:id',
    component: PokemonDetailComponent
  },
  {
    path: 'orders',
    loadChildren: () => import('./components/dev/orders/orders.module').then(m => m.OrdersModule),
    data: { animation: 'openClosePage' }
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
