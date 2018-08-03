import { Component, OnInit } from '@angular/core';
import { Posts } from './posts.model';
import { PostsService } from './posts.service';
import { People } from '../people/people.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postText: 'Escribe algo...';
  personPost: People;
  myPosts: Posts[];

  constructor(private postsListService: PostsService) { }

  ngOnInit() {
    this.postsListService.getPostList()
    .subscribe(
      (data: Posts[]) => this.myPosts = data,
      error => console.error(error),
      () => console.log('My Posts list is loaded')
    );
  }

  addPost(post: Posts) {
    this.postsListService.addPost(post)
      // tslint:disable-next-line:no-shadowed-variable
      .subscribe(post => this.myPosts.push(post));
  }

  updatePost(post: Posts) {
    this.postsListService.updatePost(post).subscribe();
  }

  deletePost(post: Posts) {
    this.postsListService.deletePost(post.id)
      .subscribe(
        data => { this.myPosts = this.myPosts.filter( el => el.id !== post.id ); }
      );
  }

  createPost() {
    const p = new Posts();
    p.text = this.postText;
    p.selected = false;
    p.image = '';
    p.creationDate = new Date().toLocaleString();

    this.addPost(p);
  }

}
