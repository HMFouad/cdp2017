import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'gghb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private loginForm;

  public constructor(private httpClient: HttpClient,
                     private router: Router) {}

  public ngOnInit(): void {
  this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
  });
}

public get userName () {
    return this.loginForm.get('userName');
}

public get password () {
  return this.loginForm.get('password');
}

public submitLoginForm () {
          if (this.loginForm.valid) {
              this.httpClient.post(
                  '/api/login',
                  this.loginForm.value, {
                      responseType: 'json'
                  }).subscribe((response) => { // success
                  console.log (response);
                  // TODO Save token dans le localStorage ?
                  this.router.navigate(['about']);
              }, (error) => { // error
                  console.log (error);
              });
          }
      }
}
