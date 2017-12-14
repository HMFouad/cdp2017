import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'gghb-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  private createProjectForm: FormGroup;

  public constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.createProjectForm = new FormGroup({
      projectName: new FormControl('', [Validators.required]),
      projectDescription: new FormControl('', [Validators.required]),
    });
  }

  public get projectName () {
    return this.createProjectForm.get('projectName');
  }

  public get projectDescription () {
    return this.createProjectForm.get('projectDescription');
  }

  public submitCreateProjectForm () {
    var body = this.createProjectForm.value;
    body.user_id = sessionStorage.getItem('username');
    alert("Project created with success");
     if (this.createProjectForm.valid) {
        this.httpClient.post(
          '/api/createProject/' + body.user_id,
          this.createProjectForm.value, {
                responseType: 'json'
            }).subscribe((response) => { // success
            console.log (response);
        }, (error) => { // error
          console.log (error);
        });
     }else {console.log ('Not Valid');
    }
  }
}
