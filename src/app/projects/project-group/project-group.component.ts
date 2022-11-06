import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project';

@Component({
	selector: 'app-project-group',
	templateUrl: './project-group.component.html',
	styleUrls: ['./project-group.component.css']
})
export class ProjectGroupComponent implements OnInit {
	@Input() projects!: Project[];
	tasks = ['item 1', 'item 2', 'item 3', 'item 4'];
	constructor() { }

	ngOnInit(): void { }

	drop(event: CdkDragDrop<string[]>) {
		moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
	}

}
