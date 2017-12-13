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
    public projects: any;
  ngOnInit() {
    this.userID = localStorage.getItem(AppConstants.USER_ID_NAME);
    console.log(this.userID);

    const body = {userName: this.userID};
    console.log(body.userName);

    this.httpClient.post(
      '/api/listProjects/' + this.userID,
      body).subscribe((projects) => { // success
          this.projects = projects;
          // TODO Save token dans le localStorage ?
          this.router.navigate(['listProjects']);
      }, (error) => { // error
          console.log(error);
      });
  }

}
