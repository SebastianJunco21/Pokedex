import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, observable } from "rxjs";

@Injectable()
export class peticionesPokeApi{
    private urlBase: String;

    constructor(public _http: HttpClient){
        this.urlBase = "https://pokeapi.co/api/v2/";
    }

    // Obtiene todos los pokemons sin ningun tipo de organizacion
    // Get: Name - 
    getListPokemon(){
        return this._http.get(this.urlBase + "pokemon/");
    }

    
}
