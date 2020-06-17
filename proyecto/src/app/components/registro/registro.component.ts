import { Component, OnInit } from '@angular/core';
import { User } from "../../models/userTypes";
import { UserService } from "../../services/user.service";
import Swal from "sweetalert2";
import * as moment from 'moment';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public user: User;
  public userLocal: any;
  public saveUser;
  public today: string = moment().format('D MMM YYYY h:mm:ss');

  constructor(private _userService: UserService) { 
    this.user = new User("", "", "", "","", this.today);
    this.userLocal = JSON.parse(localStorage.getItem("user"));
   }

  ngOnInit(): void {
  }

  onSubmit(form) {
    this._userService.createUser(this.user).subscribe(
      (response) => {
        this.saveUser = response.user;
        form.reset();
        Swal.fire({
          title: "Regitrado!",
          text: "Usuario creado correctamente",
          icon: "success",
          confirmButtonText: "Cool",
        });
        
      },
      (error) => {
        console.log(<any>error);
        Swal.fire({
          title: "Error!",
          text: "No se ha podido crear el usuario",
          icon: "error",
          confirmButtonText: "Intentarlo de nuevo",
        });
        form.reset();
      }
    );
  }

}
