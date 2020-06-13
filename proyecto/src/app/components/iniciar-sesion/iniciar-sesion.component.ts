import { Component, OnInit } from "@angular/core";
import { User } from '../../models/userTypes';

@Component({
  selector: "app-iniciar-sesion",
  templateUrl: "./iniciar-sesion.component.html",
  styleUrls: ["./iniciar-sesion.component.css"],
})
export class IniciarSesionComponent implements OnInit {

  public user:User;

  constructor() {
    this.user = new User("","","","");
  }

  

  ngOnInit() {}

  onSumit(){
    
  }
}
