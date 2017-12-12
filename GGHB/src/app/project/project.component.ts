import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Http, RequestOptions, URLSearchParams, ResponseContentType } from '@angular/http';

const url = 'http://localhost:3000/project';
const urldeleteus = 'http://localhost:3000/deleteUs';
const urlupdateus = 'http://localhost:3000/updateUs';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
public id_project;
public projects;
public id_us;
public listofUs=[];
  //constructor(private http:Http, private router:Router) { }
  public constructor(private httpClient: HttpClient,private http:Http,
  private router:Router
) {}

  ngOnInit() {
  this.id_project= '3';
  /*  this.http.post(
      '/api/project',
        this.id_project, {
            responseType: 'json'
        }).subscribe((response) => { // success
            this.projects = JSON.parse(response['_body']).result;
      //  console.log (response);
    }, (error) => { // error
      console.log (error);
    });
 }*/

//this.id_project= JSON.parse(localStorage.getItem('currentUs'));
  //   this.http.post(url, { id_project: this.id_project[0].id }).subscribe(response => {
      this.id_project= '3';
        this.http.post('/api/project', { id_project: this.id_project }).subscribe(response => {
              this.projects = JSON.parse(response['_body']).result;
      },
     error => {
       console.log(error);
     });
  }


//recuperer les id

onSelectToDelete(id) {
const data=[];
for(let i=0; i < this.projects.length; i++){
  if(this.projects[i]['id'] == id) {
    data.push(this.projects[i]);
  }
}
//alert(id);
localStorage.setItem('currentUs', JSON.stringify(data));

///////////////////delete currente us//////////////////////////////
this.id_us=id;
this.http.post('api/deleteUs', { id_us: this.id_us}).subscribe(response => {
//alert(this.id_us);

});
//this.router.navigate(['/project']);
/////////////////////////////////////////////
}

updateUS(){
alert("TODO updateUS function");
}
addUs(){
//alert("TO CALL class createUs");
//this.router.navigate(['/createUs']);
}
}
