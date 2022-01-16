import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http'

import { PokemonsService } from '../../services/pokemons.service';
import { Habilidades, Pokemos } from '../../models/pokemos';
import { Tipo } from '../../models/tipo.pokemos';


@Component({
  selector: 'app-pokemos',
  templateUrl: './pokemos.component.html',
  styleUrls: ['./pokemos.component.css']
})
export class PokemosComponent implements OnInit {

  //LLamos PokemonServices
  constructor(private pokemonsService:PokemonsService ) { }

  public nombrePokemons: any = [];
  
  public pokemon: any = [];
  public pokemonw: any = [1,2];
  public urlPokemons: any = [1,2];

  ngOnInit(): void {
   this.pokemonsService.pokemosGet().subscribe((resp: Pokemos) =>{
      this.nombrePokemons = resp.results
      console.log(resp.results)
   });

   console.log(Array(this.pokemon));
  }

  poke(poke: string){
    this.urlPokemons = poke
    this.pokemonsService.habilidadesGet(poke).subscribe((resp: Habilidades ) =>{
      this.pokemon = resp.types
    });
    console.log(this.pokemon)
  }

}
