import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Http, RequestOptions, URLSearchParams, ResponseContentType } from '@angular/http';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
public id_project;
public projects;
public id_us;
public priority;
public state;
public element;
public us:any;


  public constructor(private httpClient: HttpClient,private http:Http,
  private router:Router
) {}

  ngOnInit() {
     this.id_project = window.sessionStorage.getItem('currentProjectID');
     const body = {id_project: this.id_project};

     this.httpClient.post('/api/project/'+ this.id_project, body).subscribe((us) =>{
                this.us=us;
      },
     error => {
       console.log(error);
     });

  }

//recuperer les id
onSelectToDelete(id) {
const data=[];
for(let i=0; i < this.us.length; i++){
  if(this.us[i]['id'] == id) {
    data.push(this.us[i]);
  }
}
localStorage.setItem('currentUs', JSON.stringify(data));

///////////////////delete currente us//////////////////////////////
this.id_us=id;
this.http.post('api/deleteUs', { id_us: this.id_us}).subscribe(response => {
});
this.ngOnInit();

/////////////////////////////////////////////
}
///////////////////////////row editable and updatePriority//////////////////

changed(event) {
   this.priority = event.target.innerText;
 }
 lostfocus(event) {
   this.element = event.target;
   if (isNaN(this.priority) || this.priority.length == 0) {
     this.element.innerText = this.element.parentElement.children[4].innerText;
   }
   // tslint:disable-next-line:one-line
   else {
     this.http.post('api/updateUs', {  priority: this.priority ,id_us: this.element.parentElement.children[0].innerText}).subscribe(response => {
       if (JSON.parse(response['_body']).result) {
         console.log('Priority  changed');
       }

     });
   }
 }
/////////////////////////////////edit updateUsState
changedState(event) {
   this.state = event.target.innerText;
 }
 lostfocusState(event) {
   this.element = event.target;
     this.http.post('api/updateUsState', {  state: this.state ,id_us: this.element.parentElement.children[0].innerText}).subscribe(response => {
       if (JSON.parse(response['_body']).result) {
         console.log('State changed');
       }


     });
 }

}
