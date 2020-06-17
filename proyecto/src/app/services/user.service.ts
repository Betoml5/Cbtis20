import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Global } from "./global";
import { Observable } from "rxjs";
import { User } from "../models/userTypes";

@Injectable({
  providedIn: "root",
})
export class UserService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }

  createUser(user: User):Observable<any>{
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set("Content-Type", "application/json");

    return this._http.post(this.url+"register", params, { headers: headers});
  
  }

   loginUser(user: User):Observable<any>{
     let params = JSON.stringify(user)
     let headers = new HttpHeaders().set("Content-Type", "application/json")
     return this._http.post(this.url+"login", params, { headers: headers})
   }

   getUser(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    // fetch(this.url+'project'+id,{headers:headers})
    return this._http.get(this.url+'user/'+id, {headers:headers})
}
}
