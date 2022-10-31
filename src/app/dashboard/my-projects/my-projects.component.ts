import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/interfaces/project';

@Component({
	selector: 'app-my-projects',
	templateUrl: './my-projects.component.html',
	styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {
	@Input() projects!: Project[];
	constructor() { }

	ngOnInit(): void {
	}

}
