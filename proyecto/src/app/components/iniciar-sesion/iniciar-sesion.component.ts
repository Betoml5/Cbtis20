import { Component, OnInit, Output } from "@angular/core";
import { User } from "../../models/userTypes";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-iniciar-sesion",
  templateUrl: "./iniciar-sesion.component.html",
  styleUrls: ["./iniciar-sesion.component.css"],
})
export class IniciarSesionComponent implements OnInit {


  public user: User;
  public state: string;
  public userLocal: any;

  constructor(private _userService: UserService, private _router: Router) {
    this.user = new User("", "", "", "", "");
     
  }

  ngOnInit() {}

  onSubmit(form) {
    this._userService.loginUser(this.user).subscribe(
      (response) => {
        if (response.state === "success") {
          localStorage.setItem("user", JSON.stringify(response.user));
          this.state = "success";
          form.reset();
          console.log(response);
          this._router.navigate(["/"]).then(() => {
            location.reload();
          })
        }
      },
      (error) => {
        Swal.fire({
          title: "Error!",
          text: "No se ha podido autenticar el usuario",
          icon: "error",
          confirmButtonText: "Intentarlo de nuevo",
        });
        console.log(error);
        form.reset();
      }
    );
  }

  login(){
    const container = document.querySelector('#login-container');
    container.classList.toggle('removed');
  }

  
}
