import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
	title = 'agenda';
	showSidebar: boolean = false;
	routerSubscription: Subscription | null = null;

	constructor(private router: Router) { }

	ngOnInit(): void {
		this.routerSubscription = this.router.events.subscribe(result => {
			// Check is there is a session cookie
			this.showSidebar = !!document.cookie.match(/^(.*;)?\s*connect.sid\s*=\s*[^;]+(.*)?$/);
		});
	}

	ngOnDestroy(): void {
		if (this.routerSubscription != null) {
			this.routerSubscription.unsubscribe();
		}
	}
}
