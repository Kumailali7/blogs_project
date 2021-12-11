import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  name = '';
  email = '';
  message = '';

  constructor() { }

  ngOnInit(): void {
  }

  contactus() {
    this.name = '';
    this.email = '';
    this.message = '';
  }

}
