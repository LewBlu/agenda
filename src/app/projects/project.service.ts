import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';

@Injectable({
	providedIn: 'root'
})
export class ProjectService {

	constructor(private http: HttpClient) { }

	// getProjects() {
	// 	this.http.get('https://localhost:8080/projects', { withCredentials: true }).subscribe(result => {
	// 		console.log(result);
	// 	});
	// }

	createProject(project_data: Project) {
		this.http.post('https://localhost:8080/projects/create', project_data, { withCredentials: true }).subscribe(result => {
			return { 'success': true, project: result };
		});
	}
}
