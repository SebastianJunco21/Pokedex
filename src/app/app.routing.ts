import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { PokedexComponent } from "./Components/pokedex/pokedex.component";

const appRoutes: Routes = [
    { path: "", component: PokedexComponent },
    { path: "Pokinedex", component: PokedexComponent }
];

export const appRouingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);