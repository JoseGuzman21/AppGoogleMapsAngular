import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Importando los imports de material desde un module
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';

// Importando el modulo de google maps
import { AgmCoreModule } from '@agm/core';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDYkQ3p2zkbAmrWBqmRdcjQZekl1IaGTBQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
