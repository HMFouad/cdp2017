import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {AppConstants} from './../app-constants';

@Component({
  selector: 'gghb-list-sprints',
  templateUrl: './list-sprints.component.html',
  styleUrls: ['./list-sprints.component.css']
})
export class ListSprintsComponent implements OnInit {

  private projectID;
  public sprints: any;


  constructor(private httpClient: HttpClient,
              private router: Router) { }

  ngOnInit() {


    this.projectID = sessionStorage.getItem('currentProjectID');
    const body = {projectID: this.projectID};

    this.httpClient.post(
      '/api/listSprints/'+ this.projectID,
      body).subscribe((sprints) => {
        this.sprints = sprints;
      this.router.navigate(['listSprints']);
    }, (error) => { // error
      console.log(error);
    });

  }
}
