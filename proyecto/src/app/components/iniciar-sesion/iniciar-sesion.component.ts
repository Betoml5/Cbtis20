import { Component, OnInit, Output } from "@angular/core";
import { User } from "../../models/userTypes";
import { UserService } from "../../services/user.service";
import * as moment from "moment";
import { Router } from "@angular/router";


@Component({
  selector: "app-iniciar-sesion",
  templateUrl: "./iniciar-sesion.component.html",
  styleUrls: ["./iniciar-sesion.component.css"],
})
export class IniciarSesionComponent implements OnInit {

  @Output() style;

  public user: User;
  public state: string;
  public userLocal: any;

  constructor(private _userService: UserService, private _router: Router) {
    this.user = new User("", "", "", "", "", "");
  }

  ngOnInit() {}

  onSubmit(form) {
    this._userService.loginUser(this.user).subscribe(
      (response) => {
        if (response.state === "success") {
          localStorage.setItem("user", JSON.stringify(response.user));
          this.state = "success";
          form.reset();
          this._router.navigate(["/"]);
        }
      },
      (error) => {
        console.error(error);
        this.state = "failed";

        form.reset();
      }
    );
  }

  login(){
    const container = document.querySelector('#login-container');
    container.classList.toggle('removed');
  }

  
}
