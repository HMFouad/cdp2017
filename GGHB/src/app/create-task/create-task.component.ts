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


    private createUsForm: FormGroup;

    public constructor(private httpClient: HttpClient) {}

    ngOnInit(): void {
      this.createUsForm = new FormGroup({
            taskDescription: new FormControl('', [Validators.required]),
              taskState: new FormControl('', [Validators.required]),
              taskUser: new FormControl('', [Validators.required]),
            });
    }


}
  /*public get usDescription () {
    return this.createUsForm.get('usDescription');
  }

  public get usDifficult () {
    return this.createUsForm.get('usDifficult');
  }
  public get usPriority () {
    return this.createUsForm.get('usPriority');
  }
  public get usState () {
    return this.createUsForm.get('usState');
  }



    public submitCreateUsForm () {

      const body = this.createUsForm.value;
      body.sprint_id = '';
      alert(body.project_id);
       if (this.createUsForm.valid) {
          this.httpClient.post(
            '/api/createUs',
            this.createUsForm.value, {
                  responseType: 'json'
              }).subscribe((response) => { // success
              console.log (response);
          }, (error) => { // error
            console.log (error);
          });
       }else {console.log ('Not Valid');
      }
    }
*/
