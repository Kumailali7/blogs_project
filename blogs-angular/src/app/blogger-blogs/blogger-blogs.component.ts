import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../models/Blog';
import { BlogsDataService } from '../services/data/blogs-data.service';

@Component({
  selector: 'app-blogger-blogs',
  templateUrl: './blogger-blogs.component.html',
  styleUrls: ['./blogger-blogs.component.scss']
})
export class BloggerBlogsComponent implements OnInit {

  name = '';
  blog! : Blog;
  blogs: Blog[] = [];
  errorMessage = '';
  message = '';
  user = sessionStorage.getItem('authenticatedUser') || '';

  constructor(
    private route : ActivatedRoute,
    private blogService : BlogsDataService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.refreshBlogs();
  }

  refreshBlogs() {
    this.blogService.retrieveAllBlogsByUsername(this.user).subscribe(
      response =>   this.handleSuccessfulResponse(response),
      error =>   this.handleErrorResponse(error)
    );
  }

  viewBlog(id : number) {
    this.router.navigate(['blog',id]);
  }

  deleteBlog(id : number) {
    this.blogService.deleteBlog(this.user, id).subscribe(
      response =>   this.handleSuccessfulResponse(response),
      error =>   this.handleErrorResponse(error)
    );
    this.blogs.forEach((element,index)=>{
      if(element.id==id) this.blogs.splice(index,1);
    });
  }

  updateBlog(id : number, blog : Blog) {
    this.router.navigate(['updateblog', id]);
  }

  createBlog() {
    this.router.navigate(['updateblog', -1]);
  }

  handleSuccessfulResponse(response: any) {
    if(response) 
      this.blogs = response;
  }

  handleErrorResponse(error : any) {
    this.errorMessage = error.error.message;
  }

}
