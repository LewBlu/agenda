import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(private http: HttpClient, private router: Router) { }

	login(userData: any) {
		this.http.post('https://localhost:8080/login', userData, { withCredentials: true }).subscribe((result: any) => {
			if (result) {
				localStorage.setItem('user', JSON.stringify(result.user));
				this.router.navigateByUrl('/');
			}
		});
	}

	signout() {
		this.http.get('https://localhost:8080/logout', { withCredentials: true }).subscribe(result => {
			document.cookie = 'connect.sid' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
			this.router.navigateByUrl('/login');
		});
	}
}
