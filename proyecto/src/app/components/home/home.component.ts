import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {

  public userLocal;

  constructor() {
    this.userLocal = localStorage.getItem('user');
  }

  ngOnInit() {}

}
