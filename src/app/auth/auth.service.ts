import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(private http: HttpClient, private router: Router) { }

	signout() {
		this.http.get('https://localhost:8080/logout', { withCredentials: true }).subscribe(result => {
			document.cookie = 'connect.sid' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
			this.router.navigateByUrl('/login');
		});
	}
}
