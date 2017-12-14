import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AppConstants} from './../app-constants';

@Component({
    selector: 'gghb-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    private loginForm;

    private userConnected: boolean;

    public constructor(private httpClient: HttpClient,
        private router: Router) { }

    public ngOnInit(): void {
        this.userConnected = false;
        this.loginForm = new FormGroup({
            'userName': new FormControl('', [Validators.required]),
            'password': new FormControl('', [Validators.required]),
        });
    }

    public get userName() {
        return this.loginForm.get('userName');
    }

    public get password() {
        return this.loginForm.get('password');
    }

    public submitLoginForm() {
        if (this.loginForm.valid) {
            this.httpClient.post(
                '/api/login',
                this.loginForm.value, {
                    responseType: 'json'
                }).subscribe((response) => { // success
              //      localStorage.setItem(AppConstants.USER_ID_NAME, this.loginForm.value.userName);
                    sessionStorage.setItem('username', this.loginForm.value.userName);
                    console.log(response);

                    this.userConnected = true;
                    // TODO Save token dans le localStorage ?
                    this.router.navigate(['listProjects']);
                }, (error) => { // error
                    this.userConnected = false;
                    console.log(error);
                });
        }
    }

    public logout() {
        this.userConnected = false;
        this.router.navigate(['home']);
        sessionStorage.setItem('username', null);
    }
}
