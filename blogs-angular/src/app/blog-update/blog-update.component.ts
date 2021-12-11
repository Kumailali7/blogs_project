import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../models/Blog';
import { BlogsDataService } from '../services/data/blogs-data.service';

@Component({
  selector: 'app-blog-update',
  templateUrl: './blog-update.component.html',
  styleUrls: ['./blog-update.component.scss'],
})
export class BlogUpdateComponent implements OnInit {
  id!: number;
  blog!: Blog;
  errorMessage = '';
  user = '';

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogsDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.blog = new Blog(this.id, '', '', '', '', '', new Date(), new Date());

    if (this.id != -1) {
      this.blogService
        .retrieveBlog(this.id)
        .subscribe((data) => (this.blog = data));
    }
  }

  saveBlog() {
    this.user = sessionStorage.getItem('authenticatedUser') || '';
    this.blog.username = this.user;
    if (this.id == -1) {
      // Create Blog
      this.blogService.createBlog(this.user, this.blog).subscribe(
        (response) => {
          this.blog = response;
        },
        (error) => this.handleErrorResponse(error)
      );
      this.blogService.createBlog(this.user, this.blog);
      this.router.navigate([`home/${this.user}`]);
    } else {
      //Update Blog

      this.blogService.updateBlog(this.user, this.id, this.blog).subscribe(
        (response) => {
          this.blog = response;
        },
        (error) => this.handleErrorResponse(error)
      );
      this.blogService.updateBlog(this.user, this.id, this.blog);
      this.router.navigate(['blogger/blogs']);
    }
  }

  handleErrorResponse(error: any) {
    this.errorMessage = error.error.message;
  }
}
