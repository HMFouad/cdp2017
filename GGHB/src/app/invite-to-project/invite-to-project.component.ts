import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'gghb-invite-to-project',
  templateUrl: './invite-to-project.component.html',
  styleUrls: ['./invite-to-project.component.css']
})
export class InviteToProjectComponent implements OnInit {
  private inviteToProjectForm: FormGroup;

  public constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.inviteToProjectForm = new FormGroup({
      username_inv: new FormControl('', [Validators.required]),
      projectName: new FormControl('', [Validators.required]),
    });
  }

  public get projectName() {
    return this.inviteToProjectForm.get('projectName');
  }

  public get username_inv() {
    return this.inviteToProjectForm.get('username_inv');
  }


  public submitInviteToProjectForm() {
    if (this.inviteToProjectForm.valid) {
      this.httpClient.post(
        '/api/inviteToProject',
        this.inviteToProjectForm.value, {
          responseType: 'json'
        }).subscribe((response) => { // success
        console.log(response);
      }, (error) => { // error
        console.log(error);
      });
    } else {
      console.log('Not Valid');
    }
  }
}
