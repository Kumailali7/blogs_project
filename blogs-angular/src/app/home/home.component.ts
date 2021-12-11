import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  message = '';
  name='';
  welcomeMessage = '';
  user = '';

  constructor(private route : ActivatedRoute, private router : Router) {}

  ngOnInit(): void {
   this.name = this.route.snapshot.params['name'];
   this.user = sessionStorage.getItem('authenticatedUser') || '';
  }

  createBlog() {
    this.router.navigate(['updateblog', -1]);
  }

}
