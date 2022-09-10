import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({transform: "translateX(100%)"}),
        animate("200ms", style({transform: "translateX(0)",}))
      ]),
      transition(':leave', [
        style({transform: "translateX(0)"}),
        animate("200ms", style({transform: "translateX(100%)",}))
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  showForm : boolean = false;
  ngOnInit(): void {
  }

}
