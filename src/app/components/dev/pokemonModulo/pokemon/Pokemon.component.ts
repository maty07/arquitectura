import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PokemonList } from 'src/app/Models/pokemon/PokemonList';
import { PokemonService } from 'src/app/Services/pokemon/Pokemon.service';

@Component({
  selector: 'app-Pokemon',
  templateUrl: './Pokemon.component.html',
  styleUrls: ['./Pokemon.component.sass']
})


export class PokemonComponent implements OnInit {

  pokemons: PokemonList[] = [];
  display: boolean = false;
  pokemonForm: FormGroup;
  isSubmited: boolean = false;

  constructor(private pokemonService: PokemonService, private formBuilder: FormBuilder) {
    this.pokemonForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      url: ['']
    });
  }


  ngOnInit(): void {
    console.log('on init');

    this.loadAllPokemon()

  }

  ngAfterViewInit() {
    console.log('after view init');
  }

  ngOnDestroy() {
    console.log('on destroy');
  }

  loadAllPokemon() {
    return this.pokemonService.getPokemons()
      .subscribe((data: any) => {
        this.pokemons = data.results
      })
  }

  onSubmit(): void {
    if (this.pokemonForm.valid) {
      const pokemon = this.pokemonForm.value;

      this.pokemons = [new PokemonList(pokemon.name, pokemon.url), ...this.pokemons]
      this.pokemonForm.reset();
    }
  }

  get name() { return this.pokemonForm.get('name'); }
}


