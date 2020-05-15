import { Component, OnInit } from "@angular/core";
import { Post } from "../../models/post";
import { PostService } from "../../../services/post.service";
import { Global } from "src/services/global";

@Component({
  selector: "app-create-post",
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.css"],
})
export class CreatePostComponent implements OnInit {
  public title_post: string;
  public post: Post;
  public savePost;
  public status: string;

  constructor(
    //Siempre tienes que cargar los servicios en el constructor
    private _postService: PostService,
    
  ) {
    this.title_post = "SUBIR POST";
    this.post = new Post('','','',2019,'','');
  }

  ngOnInit() {}

  onSubmit(form) {
    //Guardar datos
    this._postService.savePost(this.post)
    .subscribe(
      (response) => {
        if (response.post) {
          this.savePost = response.post;
            this.status = "success";
            form.reset();
        } else {
          this.status = "failed";
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }


}
