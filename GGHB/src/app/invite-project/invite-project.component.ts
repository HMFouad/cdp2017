import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-invite-project',
  templateUrl: './invite-project.component.html',
  styleUrls: ['./invite-project.component.css']
})
export class InviteProjectComponent implements OnInit {


  constructor(private http: Http) { }

  ngOnInit() {
  }
  createInviteProject(){
    alert("pas testé");
  }

}
