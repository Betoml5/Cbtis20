import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { CarrerasComponent } from './components/carreras/carreras.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { appRoutingProviders, routing } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlumnosComponent,
    CarrerasComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    routing,
    
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
