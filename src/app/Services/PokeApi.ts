import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, observable } from "rxjs";

@Injectable()
export class peticionesPokeApi{
    private urlBase: String;
    private urlPokemon: String;
    private UrlDataGeneral: any;
    private collectionData: any;

    constructor(public _http: HttpClient){
        //#region Inicializacion URL
            this.urlBase = "https://pokeapi.co/api/v2/";
            this.urlPokemon = "https://pokeapi.co/api/v2/pokemon/";
        //#endregion

        //#region Inicializacion Variables Generales
        this.collectionData = [];
        //#endregion

    }

    // Obtiene todos los pokemons sin ningun tipo de organizacion
    // Get: Name - URL Pokemon
    // Return: Objeto Primario del Pokemon
    getListPokemon(){
        return this._http.get(this.urlBase + "pokemon/");
    }

    // Obtiene la información especifica de cada pokemon
    // Get:
    // Return: 
    getDataPokemon(){
        for(let i = 1; i <= 20; i ++){
            //this.UrlDataGeneral = this.urlPokemon + i.toString();
            let ss = this._http.get(this.urlPokemon + i.toString() + "/");
            this.collectionData.push(ss);
            //return this._http.get(this.urlPokemon + i.toString());
        }

        return this.collectionData;
    }
    
}
