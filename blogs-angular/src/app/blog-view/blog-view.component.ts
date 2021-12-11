import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../models/Blog';
import { BlogsDataService } from '../services/data/blogs-data.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent implements OnInit {

  id!: number
  blog!: Blog

  constructor(
    private route : ActivatedRoute,
    private blogService : BlogsDataService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.blog = new Blog(this.id,'', '', '','','', new Date, new Date);

    if(this.id!=-1){
      this.blogService.retrieveBlog(this.id).subscribe(
        data => this.blog = data
      );
    }
  }

}
