import { Injectable } from '@angular/core';

import { CaseStudy } from './case-study';
import { CASES } from './case-studies-mock';

@Injectable()
export class ProjectService {
    getProjects(): Promise<CaseStudy[]> {
        return Promise.resolve(CASES);
    }

    getProject(id:number): Promise<CaseStudy> {
        return this.getProjects()
            .then(projects => projects.find(project => project.id === id));
    }
}