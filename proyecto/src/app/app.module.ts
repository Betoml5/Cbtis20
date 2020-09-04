import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { appRoutingProviders, routing } from "./app.routing";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { AlumnosComponent } from "./components/alumnos/alumnos.component";
import { CarrerasComponent } from "./components/carreras/carreras.component";
import { ContactoComponent } from "./components/contacto/contacto.component";

import { IniciarSesionComponent } from "./components/iniciar-sesion/iniciar-sesion.component";
import { GruposComponent } from "./components/grupos/grupos.component";
import { PostsComponent } from "./components/posts/posts.component";
import { CreatePostComponent } from "./components/create-post/create-post.component";
import { PostComponent } from "./components/post/post.component";
import { RegistroComponent } from './components/registro/registro.component';
import { HeaderComponent } from './components/header/header.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlumnosComponent,
    CarrerasComponent,
    ContactoComponent,
    IniciarSesionComponent,
    GruposComponent,
    PostsComponent,
    CreatePostComponent,
    PostComponent,
    RegistroComponent,
    HeaderComponent,
    CuentaComponent,
    FooterComponent,
  ],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), routing, FormsModule, HttpClientModule],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
