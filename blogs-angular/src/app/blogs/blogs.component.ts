import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../models/Blog';
import { BlogsDataService } from '../services/data/blogs-data.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  name = '';
  blogs: Blog[] = [];
  errorMessage = '';
  message = '';

  constructor(
    private blogService : BlogsDataService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.refreshBlogs();
  }

  refreshBlogs() {
    this.blogService.retrieveAllBlogs().subscribe(
      response =>   this.handleSuccessfulResponse(response),
      error =>   this.handleErrorResponse(error)
    );
  }

  viewBlog(id : number) {
    this.router.navigate(['blog',id]);
  }

  handleSuccessfulResponse(response: any) {
    this.blogs = response;
  }

  handleErrorResponse(error : any) {
    this.errorMessage = error.error.message;
  }

}
