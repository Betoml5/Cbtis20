import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Importamos los componentes

import { HomeComponent } from './components/home/home.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CarrerasComponent } from './components/carreras/carreras.component';
import {CreatePostComponent} from './components/create-post/create-post.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'alumnos', component: AlumnosComponent},
  { path: 'carreras', component: CarrerasComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'crear-post', component:CreatePostComponent},


];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);