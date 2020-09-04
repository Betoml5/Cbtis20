import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';
import * as moment from 'moment';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  public title_post: string;
  public userLocal;
  public post: Post;
  public savePost;
  public status: string;
  public today: string = moment().format('D MMM YYYY h:mm:ss');


  constructor(
    // Siempre tienes que cargar los servicios en el constructor
    private _postService: PostService
  ) {
    this.userLocal = localStorage.getItem('user');
    this.title_post = 'SUBIR POST';
    this.post = new Post('', '', '', this.today, '', '');
  }

  ngOnInit() {}

  onSubmit(form) {
    // Guardar datos

    this._postService.savePost(this.post).subscribe(
      (response) => {
        console.log(response.post.content.length);
        if (response.post.content.length > 270) {
          this.savePost = response.post;
          Swal.fire({
            title: 'Enviado!',
            text: 'Tu post se ha publicado correctamente',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
          this.status = 'success';
          form.reset();
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'No se ha podido publicar tu post',
            icon: 'error',
            confirmButtonText: 'Intentarlo de nuevo',
          });
          this.status = 'failed';
          form.reset();
          return false;
        }
      },
      (error) => {
        this.status = 'failed';
        console.log( error as any);
      }
    );
  }
}
