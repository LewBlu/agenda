import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loginForm!: FormGroup;
	constructor(private http: HttpClient, private router: Router) { }

	ngOnInit(): void {
		this.loginForm = new FormGroup({
			'username': new FormControl(null, Validators.required),
			'password': new FormControl(null, Validators.required)
		});
	}

	login() {
		this.http.post('https://localhost:8080/login', this.loginForm.value, { withCredentials: true }).subscribe((result: any) => {
			if (result) {
				localStorage.setItem('user', JSON.stringify(result.user));
				this.router.navigateByUrl('/');
			}
			console.log(result);
		});
	}
}