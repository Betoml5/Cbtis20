import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { CarrerasComponent } from './components/carreras/carreras.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { appRoutingProviders, routing } from './routes';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { GruposComponent } from './components/grupos/grupos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlumnosComponent,
    CarrerasComponent,
    ContactoComponent,
    IniciarSesionComponent,
    GruposComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
