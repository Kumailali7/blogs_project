import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { HardcodedAuthService } from '../services/authentication/hardcoded-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isCollapsed = true;
  faBook = faBook;
  
  constructor(public hardCodedAuthenticationService : HardcodedAuthService, private router : Router) { }

  ngOnInit(): void {
    
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    this.hardCodedAuthenticationService.logout();
    this.router.navigate(['']);
  }

}
