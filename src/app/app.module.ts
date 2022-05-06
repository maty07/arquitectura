import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// components prime ng
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { TableModule } from 'primeng/table';
import { PickListModule } from 'primeng/picklist';
import { OrderListModule } from 'primeng/orderlist';
import { SidebarModule } from 'primeng/sidebar';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { TabMenuModule } from 'primeng/tabmenu';
import { CardModule } from 'primeng/card';
import { ListboxModule } from 'primeng/listbox';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';


// app components
import { PokemonComponent } from './components/dev/pokemonModulo/pokemon/Pokemon.component'
import { PokemonDetailComponent } from './components/dev/pokemonModulo/pokemon-detail/pokemon-detail.component';
import { LoginComponent } from './components/dev/login/login.component';
import { HeaderComponent } from './components/template/header/header.component';
import { OnlyLoggedInUsersGuard } from './guard/OnlyLoggedInUsersGuard';
import { RedirectIfLoggedIn } from './guard/RedirectIfLoggedIn';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonDetailComponent,
    LoginComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    DataViewModule,
    TableModule,
    PickListModule,
    OrderListModule,
    SidebarModule,
    MessagesModule,
    ToastModule,
    TabMenuModule,
    AppRoutingModule,
    CardModule,
    ListboxModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    RippleModule,

  ],
  providers: [OnlyLoggedInUsersGuard, RedirectIfLoggedIn, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
