import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { HardcodedAuthService } from '../services/authentication/hardcoded-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  errorMessage = "Invalid credentials";
  invalidLogin = false;
  
  faUser = faUser;
  faPassword = faKey;


  constructor(private router : Router, private hardCodedAuthService : HardcodedAuthService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if(this.hardCodedAuthService.authenticate(this.username, this.password)){ 
      this.router.navigate(['home',this.username]);
      this.invalidLogin = false;
    }
    else {
      this.invalidLogin = true;
    }
  }

}
