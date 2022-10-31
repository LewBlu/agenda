import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../project.service';

@Component({
	selector: 'app-project-form',
	templateUrl: './project-form.component.html',
	styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
	projectForm!: FormGroup;
	constructor(private projectService: ProjectService) { }

	ngOnInit(): void {
		this.projectForm = new FormGroup({
			title: new FormControl(null, Validators.required),
			key: new FormControl(null, Validators.required),
			description: new FormControl(),
			owner_id: new FormControl(),
			group_id: new FormControl()
		});
	}

	createProject() {
		this.projectService.createProject(this.projectForm.value);
	}
}
