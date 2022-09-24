import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared-components/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectGroupComponent } from './projects/project-group/project-group.component';
import { ProjectFormComponent } from './projects/project-form/project-form.component';
import { MyIssuesComponent } from './dashboard/my-issues/my-issues.component';
import { MyProjectsComponent } from './dashboard/my-projects/my-projects.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		SidebarComponent,
		DashboardComponent,
		ProjectsComponent,
		ProjectGroupComponent,
		ProjectFormComponent,
		MyIssuesComponent,
		MyProjectsComponent,
		LoginComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		DragDropModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
