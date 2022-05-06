import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { PokemonList } from '../../Models/pokemon/PokemonList';
import { Pokemon } from '../../Models/pokemon/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  private endpoint: string = 'https://pokeapi.co/api/v2/pokemon/';

  getPokemons() {
    return this.http.get(this.endpoint + '?limit=10')
      .pipe(
        catchError(this.handleError<PokemonList[]>('getPokemons'))
      );
  }

  getPokemon(pokemon: string | null): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.endpoint}${pokemon}`)
      .pipe(
        catchError(this.handleError<Pokemon>('getPokemon'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      // console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}


