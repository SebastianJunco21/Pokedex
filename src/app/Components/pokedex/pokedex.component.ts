import { Component, OnInit } from '@angular/core';
import { peticionesPokeApi } from '../../Services/PokeApi';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  private resulList: any;
  public pokemonIndivi: string;

  constructor(public _peticionesPokeApi: peticionesPokeApi) {
    this.pokemonIndivi = "";
  }

  ngOnInit(): void {
    this.listaPokemon();
  }

  listaPokemon(){
    this._peticionesPokeApi.getListPokemon().subscribe(
      res => {
        this.resulList = res;
        const resPokemon = this.resulList.results;
        const longArray = this.resulList.results.length;
        for(let i = 0; i < longArray; i++){
          this.pokemonIndivi += resPokemon[i].name;
          // console.log(resPokemon[i].name);
        }

        console.log(resPokemon);
      },
      err => {
        console.log(err);
      }
    );
  }

}
