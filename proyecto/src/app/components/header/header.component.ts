import { Component, OnInit } from "@angular/core";
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  public userLocal: any;
  public user:any;
  public screen;

  constructor(
    private userService: UserService
  ) {
   this.userLocal = localStorage.getItem('user');
  }

  ngOnInit(): void {
    
  }

  menuRes(){
    const menuCol = document.querySelector('#menu_colapsed');
    const menuLogo = document.querySelector('#menu_logo');
    
    menuLogo.classList.toggle('menuAnimation')
    menuCol.classList.toggle('menu_colapsed_active');
  }


}
