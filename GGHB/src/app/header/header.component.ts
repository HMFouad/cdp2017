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

    public userConnected: boolean;


    public constructor(private httpClient: HttpClient,
        private router: Router) { }

    public ngOnInit(): void {
        this.loginForm = new FormGroup({
            'userName': new FormControl('', [Validators.required]),
            'password': new FormControl('', [Validators.required]),
        });
        this.userConnected = JSON.parse(sessionStorage.getItem('isConnected'));
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
                    sessionStorage.setItem('username', this.loginForm.value.userName);
                    sessionStorage.setItem('isConnected', "true");
                    this.userConnected = true;
                    // TODO Save token dans le localStorage ?
                    this.router.navigate(['listProjects']);
                }, (error) => { // error
                    console.log(error);
                });
        }
    }

    public logout() {
        sessionStorage.setItem('isConnected', "false");
        this.userConnected = false;
        this.router.navigate(['home']);
        sessionStorage.setItem('username', null);
        console.log(sessionStorage.getItem('isConnected'));
    }
}
