import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedInUser: string;

  constructor(private alertyfy : AlertifyService) { }

  ngOnInit() {
  }

  loggedIn(){
    this.loggedInUser = localStorage.getItem('token') || '{}';
    if(this.loggedInUser == '{}')
      return undefined;
    else
      return this.loggedInUser;

  }

  onLogout(){
    localStorage.removeItem('token');
    this.alertyfy.success('You are logged out!!');
    //this.router.navigate(['user-login']);
  }
}
