import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { Post } from 'src/app/models/post';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
    public posts: Post[];


  constructor(
    private _postService: PostService,
  ) { 
    this.posts = []
   }

  ngOnInit() {

    this._postService.getPosts()
    .subscribe(
      (response) => {

        for(let i=0; i < response.posts.length; i++){
          this.posts.push(response.posts[i])
        }

        console.log(this.posts);

        


      }, (error) =>{
        console.log("Ha ocurrido un error: " + error);
      }
    )

  }

 

}
