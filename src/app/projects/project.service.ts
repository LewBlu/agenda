import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from '../interfaces/project';

@Injectable({
	providedIn: 'root'
})
export class ProjectService {
	myProjects: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);
	projects: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);

	constructor(private http: HttpClient) { }

	// Get a list of all the projects in the application
	getProjects() {
		if (this.myProjects.value.length == 0) {
			this.http.get('https://localhost:8080/projects/', { withCredentials: true }).subscribe((result: any) => {
				this.projects?.next(result.result);
			});
		}
	}

	// Get a list of projects for the logged in user
	getMyProjects() {
		if (this.myProjects.value.length == 0) {
			this.http.get('https://localhost:8080/projects/my-projects', { withCredentials: true }).subscribe((result: any) => {
				this.myProjects?.next(result.result);
			});
		}
	}

	// Add a project to the database
	createProject(project_data: Project) {
		this.http.post('https://localhost:8080/projects/create', project_data, { withCredentials: true }).subscribe((result: any) => {
			// Once project added, add to list of my projects
			let myProjectsUpdated = this.myProjects.value;
			myProjectsUpdated.push(result.result);
			this.myProjects.next(myProjectsUpdated);
			return result;
		});
	}
}
