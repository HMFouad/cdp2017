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
private id_sprint;
public tasks:any;
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
      this.id_sprint = window.sessionStorage.getItem('currentSprintID');
      const body = {id_sprint: this.id_sprint};

       this.httpClient.post('/api/createTask/'+ this.id_sprint, this.createTaskForm.value).subscribe((tasks) =>{
         this.tasks = tasks;
    }, (error) => { // error
      console.log(error);
    });

   }

}
