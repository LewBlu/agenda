import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from '../interfaces/project';
import { ProjectService } from '../projects/project.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
	myProjectSubscription!: Subscription;
	myProjects!: Project[];
	constructor(private projectService: ProjectService) { }

	ngOnInit(): void {
		this.projectService.getMyProjects();
		this.myProjectSubscription = this.projectService.myProjects!.subscribe((result: any) => {
			this.myProjects = result;
		});
	}

	ngOnDestroy(): void {
		if (this.myProjectSubscription != null) {
			this.myProjectSubscription.unsubscribe();
		}
	}
}
