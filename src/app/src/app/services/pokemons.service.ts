import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Habilidades, Pokemos } from '../models/pokemos';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private configUrl ="https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150";


  constructor( private http: HttpClient) {}

  pokemosGet(){
    return this.http.get<Pokemos>(this.configUrl);
  }

  habilidadesGet(apiAbilities: string){
    console.log(apiAbilities+"a");
    return this.http.get<Habilidades>(apiAbilities)
    
  }
}
 