import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './global';
import { Post } from 'src/app/models/post';
import { Observable } from 'rxjs';

@Injectable()
export class PostService{
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    testService(){
        return 'Probando el servicio de angular'
    }

    savePost(post: Post): Observable<any>{
        let params = JSON.stringify(post);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(`${this.url}save-post`,params,{headers:headers})
    }
}