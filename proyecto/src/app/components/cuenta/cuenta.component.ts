import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-cuenta",
  templateUrl: "./cuenta.component.html",
  styleUrls: ["./cuenta.component.css"],
})
export class CuentaComponent implements OnInit {
  public user: any;
  public userLocal: any;
  constructor(
    private _route: ActivatedRoute,
    private _userService: UserService
  ) {
    this.userLocal = JSON.parse(localStorage.getItem("user"));
  }

  ngOnInit(): void {
    let id = this.userLocal._id;
    this.getUser(id);
    console.log(id);
  }

  getUser(id) {
    this._userService.getUser(id).subscribe(
      (response) => {
        this.user = response.post;
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
}
