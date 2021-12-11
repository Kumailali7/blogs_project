import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from 'src/app/models/Blog';

@Injectable({
  providedIn: 'root',
})
export class BlogsDataService {
  constructor(private http:HttpClient)
  {}

  apiUrl = 'http://localhost:8082/api/blogs/';

  retrieveAllBlogs() {
     return this.http.get<Blog[]>(this.apiUrl);
  }

  retrieveAllBlogsByUsername(username : string) {
    return this.http.get<Blog[]>(this.apiUrl + `blogger/${username}`);
 }

  deleteBlog(username: string, id: number) {
     return this.http.delete(this.apiUrl + `${username}/${id}`);
  }

  updateBlog(username: string, id: number, blog: Blog) {
    return this.http.put<Blog>(this.apiUrl + `${username}/${id}`, blog);
  }

  createBlog(username: string, blog: Blog) {
    return this.http.post<Blog>(this.apiUrl + `${username}`, blog);
  }

  retrieveBlog(id: number) {
    return this.http.get<Blog>(this.apiUrl + `${id}`);
  }
}
