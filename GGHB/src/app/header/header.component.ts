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

    public constructor(private httpClient: HttpClient,
        private router: Router) { }

    public ngOnInit(): void {
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
                    localStorage.setItem(AppConstants.USER_ID_NAME, this.loginForm.value.userName);
                    console.log(response);
                    // TODO Save token dans le localStorage ?
                    this.router.navigate(['listProjects']);
                }, (error) => { // error
                    console.log(error);
                });
        }
    }

    /*public logout() {
        const authToken = localStorage.getItem(AppConstants.AUTH_TOKEN_VALUE_NAME);
        this.httpClient.delete('/api/tokens', {
            headers: (new HttpHeaders()).set('Authorization', `${authToken}`),
            responseType: 'json'
        }).subscribe(() => {
            this.doLocalLogout();
        }, () => {
            this.doLocalLogout();
        });
    }*/
}
