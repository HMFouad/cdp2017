
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

public chooseUSer(){
//  this.httpClient.get()
}

    public submitCreateUsForm () {

      window.sessionStorage.setItem('currentProjectID', "3");

      this.project_id = window.sessionStorage.getItem('currentProjectID');
      const body = {project_id: this.project_id};
  
       this.httpClient.post('/api/createUs/'+ this.project_id, this.createUsForm.value).subscribe((us) =>{
          this.us = us;
     }, (error) => { // error
       console.log(error);
     });

    }
}


/*ngOnInit() {
   window.sessionStorage.setItem('currentProjectID', "1");

   this.projectID = window.sessionStorage.getItem('currentProjectID');
   const body = {projectID: this.projectID};

   this.httpClient.post(
     '/api/listSprints/'+ this.projectID,
     body).subscribe((sprints) => {
       this.sprints = sprints;
     this.router.navigate(['listSprints']);
   }, (error) => { // error
     console.log(error);
   });

 }
*/
