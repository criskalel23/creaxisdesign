import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { ProjectService } from './project.service';

var $ = require('jquery/dist/jquery.min.js');
require('bootstrap/dist/js/bootstrap.js');

import { CaseStudy } from './case-study';

@Component({
    selector: 'case-page',
    templateUrl: './case-study.component.html',
    styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent implements OnInit {
    bgDot = require('../assets/images/bg-dot.gif');
    project: CaseStudy;

    constructor( 
        private projectService: ProjectService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
    
    ngOnInit(){
        this.route.paramMap
            .switchMap((params: ParamMap) => this.projectService.getProject(+params.get('id')))
            .subscribe(project => this.project = project);

    }
    
}