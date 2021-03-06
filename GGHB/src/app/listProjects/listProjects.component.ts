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
    this.userID = sessionStorage.getItem('username');

    const body = {userName: this.userID};
    this.httpClient.post(
      '/api/listProjects/' + this.userID,
      body).subscribe((projects) => { // success
          this.projects = projects;
            }, (error) => { // error
          console.log(error);
      });
  }

  storeCurrentProjectID(id){
    window.sessionStorage.setItem('currentProjectID', id);
    this.router.navigate(['/project']);
  }

}
