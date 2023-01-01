import { Component, OnInit } from '@angular/core';
import { faCheck, faCross, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	faCheck = faCheck;
	faXmark = faXmark;

	constructor() { }

	ngOnInit(): void {
	}

}
