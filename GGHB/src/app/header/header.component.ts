import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AppConstants} from './../app-constants';
import {AppVariables} from './../app-variables';

@Component({
    selector: 'gghb-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    private loginForm;

    private userNameLog;

    public userConnected: boolean;

    public constructor(private httpClient: HttpClient,
        private router: Router) { }

    public ngOnInit(): void {
        this.userConnected = false;
        AppVariables.isConnected = false;
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
                    this.userNameLog = this.loginForm.value.userName;
                    sessionStorage.setItem('username', this.loginForm.value.userName);
                    console.log(response);

                    AppVariables.isConnected = true;

                    this.userConnected = AppVariables.isConnected;
                    // TODO Save token dans le localStorage ?
                    this.router.navigate(['listProjects']);
                }, (error) => { // error
                    AppVariables.isConnected = false;
                    this.userConnected = AppVariables.isConnected;
                    console.log(error);
                });
        }
    }

    public logout() {
        this.userConnected = false;
        AppVariables.isConnected = false;
        this.router.navigate(['home']);
        sessionStorage.setItem('username', null);
    }
}
