import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { CaseStudy } from './case-study';
import { CASES } from './case-studies-mock';

import { ProjectService } from './project.service';

@Component({
    selector: 'projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
    projects: CaseStudy[];
    selectedProject: CaseStudy;

    constructor( 
        private projectService: ProjectService,
        private router: Router
    ) {}

    getProjects(): void {
        this.projectService.getProjects()
            .then(projects => this.projects = projects);
    }

    ngOnInit(){
        this.getProjects();

    }

    onSelect(project: CaseStudy) {
        this.selectedProject = project;
        console.log('click');
    }
}