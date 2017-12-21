
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
  public us:any;
  private project_id;

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

      this.project_id=sessionStorage.getItem('currentProjectID');
      const body = {project_id: this.project_id};
       this.httpClient.post('/api/createUs/'+ this.project_id, this.createUsForm.value).subscribe((us) =>{
          this.us = us;
     }, (error) => { // error
       console.log(error);
     });

    }
}
