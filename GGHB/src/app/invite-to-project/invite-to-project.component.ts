import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gghb-invite-to-project',
  templateUrl: './invite-to-project.component.html',
  styleUrls: ['./invite-to-project.component.css']
})
export class InviteToProjectComponent implements OnInit {
  private inviteToProjectForm: FormGroup;

  public constructor(private httpClient: HttpClient) {
  }

  public project: any;

  ngOnInit(): void {
    this.inviteToProjectForm = new FormGroup({
      username_inv: new FormControl('', [Validators.required]),
    });
  }

  public get projectName() {
    return this.inviteToProjectForm.get('projectName');
  }

  public get username_inv() {
    return this.inviteToProjectForm.get('username_inv');
  }


  public submitInviteToProjectForm() {
    const projectID = sessionStorage.getItem('currentProjectID');
    if (this.inviteToProjectForm.valid) {
      alert("The user has been invited");
      this.httpClient.post(
        '/api/inviteToProject/' + projectID,
        this.inviteToProjectForm.value, {
          responseType: 'json'
        }).subscribe((response) => { // success
        }, (error) => { // error
          console.log(error);
        });
    } else {
    }
  }
}
