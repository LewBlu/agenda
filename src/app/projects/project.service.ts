import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from '../interfaces/project';

@Injectable({
	providedIn: 'root'
})
export class ProjectService {
	myProjects: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);

	constructor(private http: HttpClient) { }

	getMyProjects() {
		if (this.myProjects.value.length == 0) {
			this.http.get('https://localhost:8080/projects/my-projects', { withCredentials: true }).subscribe((result: any) => {
				this.myProjects?.next(result.result);
			});
		}
	}

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
