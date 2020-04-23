import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../usuario";

@Component({
  selector: "app-iniciar-sesion",
  templateUrl: "./iniciar-sesion.component.html",
  styleUrls: ["./iniciar-sesion.component.css"],
})
export class IniciarSesionComponent implements OnInit {

  nombre_usuario: string;
  contrasena: string;


  constructor() {}

  ngOnInit() {}
}
