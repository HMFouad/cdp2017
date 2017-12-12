import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'gghb-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

    private createTaskForm: FormGroup;

    public constructor(private httpClient: HttpClient) {}

    ngOnInit(): void {
      this.createTaskForm = new FormGroup({
            taskDescription: new FormControl('', [Validators.required]),
              taskState: new FormControl('', [Validators.required]),
              taskUser: new FormControl('', [Validators.required]),
            });
    }
    public get taskDescription () {
      return this.createTaskForm.get('taskDescription');
    }

    public get taskState () {
      return this.createTaskForm.get('taskState');
    }
    public get taskUser () {
      return this.createTaskForm.get('taskUser');
    }

    public submitCreateTaskForm () {

      const body = this.createTaskForm.value;
      body.sprint_id = 1;
      //alert(body.sprint_id);
       if (this.createTaskForm.valid) {
          this.httpClient.post(
            '/api/createTask',
            this.createTaskForm.value, {
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
