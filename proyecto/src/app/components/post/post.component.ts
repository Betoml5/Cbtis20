import { Component, OnInit } from "@angular/core";
import { PostService } from "../../services/post.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Global } from "../../services/global";
import { Post } from "src/app/models/post";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  public url: string;
  public post: Post;
  constructor(
    private _postService: PostService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = Global.url;
  }

  ngOnInit() {
    this._route.params.subscribe((params) => {
      let id = params.id;
      this.getPost(id);
      console.log(id)
    });
  }

  getPost(id) {
    this._postService.getPost(id).subscribe(
      (response) => {
        this.post = response.post;
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
}
