import { Component, OnInit } from '@angular/core';
import { peticionesPokeApi } from '../../Services/PokeApi';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  //#region Variables ListName()
    private resultListName: any;
    public resNamePokemon: Array<any>;
  //#endregion 

  //#region Variables ListImage()
    private resultListData: any;
    public resDataPokemon: Array<any>
  //#endregion

  constructor(public _peticionesPokeApi: peticionesPokeApi) {
    //#region Inicializacion variables ListName()
      this.resNamePokemon = [];
    //#endregion

    //#region Inicializacion variables PropertiesPokemon()
      this.resDataPokemon = [];
    //#endregion

  }

  ngOnInit(): void {
    this.ListName();
    this.PropertiesPokemon();
  }

  ListName(){
    this._peticionesPokeApi.getListPokemon().subscribe(
      res => {
        this.resultListName = res;
        this.resNamePokemon = this.resultListName.results;
      },
      err => {
        console.log(err);
      }
    );
  }

  PropertiesPokemon(){
    console.log(this._peticionesPokeApi.getDataPokemon());
    // this._peticionesPokeApi.getDataPokemon().subscribe(
    //   res => {
    //     this.resultListData = res;
    //     console.log(this.resultListData);
    //   },
    //   error => {

    //   }
    // );
  }

}
