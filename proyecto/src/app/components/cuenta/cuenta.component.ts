import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../../services/user.service";
import { Global } from "../../services/global";

@Component({
  selector: "app-cuenta",
  templateUrl: "./cuenta.component.html",
  styleUrls: ["./cuenta.component.css"],
})
export class CuentaComponent implements OnInit {
  public userLocal: any;
  public user: any;
  public url: string;
  public fileToUpload: Array<File>;
  public status: string;

  constructor(
    private _routeActive: ActivatedRoute,
    private _route: Router,
    private userService: UserService
  ) {
    this.userLocal = JSON.parse(localStorage.getItem("user"));
    this.url = Global.url;
  }

  ngOnInit(): void {}

  onSubmit(form) {

    if (this.fileToUpload) {
      this.userService
        .makeFileRequest(
          `${this.url}upload-image/${this.userLocal._id}`,[],this.fileToUpload,"image")
        .then(result => {
          this.status = "success";
          this.getUser();
        });
    } else{
      this.status = 'failed';
    }
  }

  getUser(){
    this.userService.getUser(this.userLocal._id)
    .subscribe(
      response =>{
        this.userLocal = response.user;
      }
    )
  }

  fileChangeEvent(fileInput: any) {
    console.log(fileInput.target.files);
    this.fileToUpload = <Array<File>>fileInput.target.files;
    const btnSubmit = document.querySelector('#btnSubmit')
    btnSubmit.classList.add('btnChange')

    setTimeout(() => {
        btnSubmit.classList.remove('btnChange');
    }, 3000);
  }

  logout() {
    localStorage.removeItem("user");
    this._route.navigate(["/"]).then(() => {
      location.reload();
    });
  }
}
