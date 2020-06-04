import { Component, OnInit } from "@angular/core";
import { Post } from "../../models/post";
import { PostService } from "../../../services/post.service";
import { Global } from "src/services/global";
import Swal from 'sweetalert2'

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
    this.post = new Post('','','','','','');
  }

  ngOnInit() {}

  onSubmit(form) {
    //Guardar datos


    this._postService.savePost(this.post)
    .subscribe(
      (response) => {
        console.log(response.post.content.length)
        if (response.post.content.length > 270) {
          this.savePost = response.post;
          Swal.fire({
            title: 'Enviado!',
            text: 'Tu post se ha publicado correctamente',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
            form.reset();
        } else {
          this.savePost = null;
          Swal.fire({
            title: 'Error!',
            text: 'No se ha podido publicar tu post',
            icon: 'error',
            confirmButtonText: 'Intentarlo de nuevo'
          })
          form.reset();
        }
      },
      (error) => {
        this.status = 'failed'
        console.log(<any>error);
      }
    );
  }


}
