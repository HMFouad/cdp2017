import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {AppConstants} from './../app-constants';

@Component({
  selector: 'gghb-listProjects',
  templateUrl: './listProjects.component.html',
  styleUrls: ['./listProjects.component.css']
})
export class ListProjectsComponent implements OnInit {

  private userID;

  constructor(private httpClient: HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.userID = localStorage.getItem(AppConstants.USER_ID_NAME);
    console.log(this.userID);

    const body = {userName: this.userID};
    console.log(body.userName);

    this.httpClient.post(
      '/api/projectslist',
      body).subscribe((response) => { // success
          console.log(response);
          // TODO Save token dans le localStorage ?
          this.router.navigate(['listProjects']);
      }, (error) => { // error
          console.log(error);
      });
  }

}
