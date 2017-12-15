import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Http, RequestOptions, URLSearchParams, ResponseContentType } from '@angular/http';


@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTasksComponent implements OnInit {
  public id_sprint;
  public projects;
  public id_task;
  public priority;
  public state;
  public element;
  public tasks: any;


  public constructor(private httpClient: HttpClient, private http: Http,
    private router: Router
  ) { }

  ngOnInit() {
    this.id_sprint = window.sessionStorage.getItem('currentSprintID');
    const body = { id_sprint: this.id_sprint };
    this.httpClient.post('/api/listTasks/' + this.id_sprint, body).subscribe((tasks) => {
      this.tasks = tasks;
    },
      error => {
        console.log(error);
      });
  }

  //recuperer les id

  onSelectToDelete(id) {
    const data = [];
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i]['id'] == id) {
        data.push(this.tasks[i]);
      }
    }
    localStorage.setItem('currentTask', JSON.stringify(data));

    ///////////////////delete currente us//////////////////////////////
    this.id_task = id;
    this.http.post('api/deleteTask', { id_task: this.id_task }).subscribe(response => {
    });
    this.ngOnInit();

    /////////////////////////////////////////////
  }

  /////////////////////////////////edit updateUsState
  changedState(event) {
    this.state = event.target.innerText;
  }
  lostfocusState(event) {
    this.element = event.target;
    this.http.post('api/updateTask', { state: this.state, id_task: this.element.parentElement.children[0].innerText }).subscribe(response => {
      if (JSON.parse(response['_body']).result) {

      }


    });
  }

}
