import { Component, OnDestroy, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Subscription } from 'rxjs';
import { Project } from '../interfaces/project';
import { ProjectService } from './project.service';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.css'],
	animations: [
		trigger('inOutAnimation', [
			transition(':enter', [
				style({ transform: "translateX(100%)" }),
				animate("200ms", style({ transform: "translateX(0)", }))
			]),
			transition(':leave', [
				style({ transform: "translateX(0)" }),
				animate("200ms", style({ transform: "translateX(100%)", }))
			])
		])
	]
})
export class ProjectsComponent implements OnInit, OnDestroy {
	projectsSubscription!: Subscription;
	projects!: Project[];
	showForm: boolean = false;

	constructor(private projectService: ProjectService) { }

	ngOnInit(): void {
		this.projectService.getMyProjects();
		this.projectsSubscription = this.projectService.myProjects!.subscribe((result: any) => {
			this.projects = result;
		});
	}

	ngOnDestroy(): void {
		if (this.projectsSubscription != null) {
			this.projectsSubscription.unsubscribe();
		}
	}
}
