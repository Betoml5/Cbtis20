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

  makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string){
    return new Promise(function (resolve, reject){
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();

      for(let i = 0; i < files.length; i++){
        formData.append(name, files[i], files[i].name);
      }

      xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
          if (xhr.status == 200) {
              resolve(JSON.parse(xhr.response))
          } else {
              reject(xhr.response)
          }
        }
      }

      xhr.open('POST', url, true);
      xhr.send(formData);

    });
    
  }

}
