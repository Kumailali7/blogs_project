import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { HardcodedAuthService } from '../services/authentication/hardcoded-auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  username = "";
  password = "";
  errorMessage = "Invalid credentials";
  invalidLogin = false;
  faUser = faUser;
  faPassword = faKey;

  constructor(private router : Router, private hardCodedAuthService : HardcodedAuthService) { }

  ngOnInit(): void {
  }

  handleSignup() {
    if(this.hardCodedAuthService.createUser(this.username, this.password)){ 
      this.router.navigate(['home',this.username]);
      this.invalidLogin = false;
    }
    else {
      this.invalidLogin = true;
    }
  }

}
