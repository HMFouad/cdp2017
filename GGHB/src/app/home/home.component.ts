import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gghb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private signUpForm: FormGroup;

  public constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    });
  }

  public get userName() {
    return this.signUpForm.get('userName');
  }

  public get password() {
    return this.signUpForm.get('password');
  }

  public get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  public submitSignUpForm() {
    if (this.signUpForm.valid) {
      this.httpClient.post(
        '/api/addUser',
        this.signUpForm.value, {
          responseType: 'json'
        }).subscribe((response) => { // success
          alert('Inscription done with success\nYou can Sign in now');
        }, (error) => { // error
          console.log(error);
        });
    } else {
    }
  }
}
