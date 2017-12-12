
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'gghb-create-us',
  templateUrl: './create-us.component.html',
  styleUrls: ['./create-us.component.css']
})
export class CreateUsComponent implements OnInit {

  private createUsForm: FormGroup;

  public constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.createUsForm = new FormGroup({
          usDescription: new FormControl('', [Validators.required]),
            usDifficulty: new FormControl('', [Validators.required]),
              usPriority: new FormControl('', [Validators.required]),
                usState: new FormControl('', [Validators.required]),
    });
  }
  public get usDescription () {
    return this.createUsForm.get('usDescription');
  }

  public get usDifficulty () {
    return this.createUsForm.get('usDifficulty');
  }
  public get usPriority () {
    return this.createUsForm.get('usPriority');
  }
  public get usState () {
    return this.createUsForm.get('usState');
  }



    public submitCreateUsForm () {

      const body = this.createUsForm.value;
      body.project_id = 3;
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
}
