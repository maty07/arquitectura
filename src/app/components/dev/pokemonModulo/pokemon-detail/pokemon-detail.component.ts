import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PokemonService } from 'src/app/Services/pokemon/Pokemon.service';
import { Pokemon } from '../../../../Models/pokemon/Pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: Pokemon | undefined;
  parametro: string = 'algo'
  recibir: string = ''
  loading: boolean = true

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemon(id)
      .subscribe(
        (data: any) => {
          this.loading = false
          if (data) {
            this.pokemon = new Pokemon(data.id, data.name, data.types[0].type.name, data.sprites.front_default)
          } else {
            this.messageService.add({ severity: 'error', summary: 'Error:', detail: 'No se encontró informacion de pokemón' });
          }

        })
  }

  onBack(): void {
    this.location.back()
  }



}
