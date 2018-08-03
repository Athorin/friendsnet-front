import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from './posts.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }

  URL_BASE = 'http://localhost:3000/post-list';

  getPostList() {
      return this.http.get(this.URL_BASE);
  }

  getPostById(id: number) {
    const url = `${this.URL_BASE}/${id}`;
    return this.http.get(url);
  }

  addPost(post: Posts): Observable<Posts> {
      return this.http.post<Posts>(this.URL_BASE, post, httpOptions);
  }

  updatePost(post: Posts): Observable<Posts> {
      const url = `${this.URL_BASE}/${post.id}`;
      return this.http.put<Posts>(url, post, httpOptions);
  }

  deletePost(id: number): Observable<{}> {
      const url = `${this.URL_BASE}/${id}`;
      return this.http.delete(url, httpOptions);
  }
}
