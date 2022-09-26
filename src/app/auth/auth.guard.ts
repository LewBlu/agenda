import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(private router: Router) { }
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if (document.cookie.match(/^(.*;)?\s*connect.sid\s*=\s*[^;]+(.*)?$/)) {
			return true;
		}
		// No session cookie found, remove user from local storage
		localStorage.removeItem('user');
		return this.router.parseUrl('/login');
	}
}