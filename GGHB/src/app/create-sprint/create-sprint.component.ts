import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'gghb-create-sprint',
  templateUrl: './create-sprint.component.html',
  styleUrls: ['./create-sprint.component.css']
})
export class CreateSprintComponent implements OnInit {
  private createSprintForm: FormGroup;

  public constructor(private httpClient: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.createSprintForm = new FormGroup({
      sprintName: new FormControl('', [Validators.required]),
      dateBegin: new FormControl('', [Validators.required]),
      dateEnd: new FormControl('', [Validators.required]),
      nbSprint: new FormControl('', []),
    });
  }

  public get sprintName() {
    return this.createSprintForm.get('sprintName');
  }

  public submitCreateSprintForm() {
    if (this.createSprintForm.valid) {
      this.httpClient.post(
        '/api/createSprint/' + sessionStorage.getItem('currentProjectID'),
        this.createSprintForm.value, {
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
