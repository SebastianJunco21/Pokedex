import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRouingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { PokedexComponent } from './Components/pokedex/pokedex.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokedexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [
    appRouingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
