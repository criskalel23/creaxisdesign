import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { BannerComponent } from './banner.component';
import { AuthorsComponent } from './authors.component';
import { WhatwedoComponent } from './whatwedo.component';
import { WorksComponent } from './works.component';
import { ClientsComponent } from './clients.component';
import { ContactComponent } from './contact.component';
import { FooterComponent } from './footer.component';
import { TestimonialPipe } from './client-testimonial.pipe';
import { HomeComponent } from './home.component';

import { CaseStudyComponent } from './case-study.component';
import { ProjectsComponent } from './projects.component';

import { ProjectService } from './project.service';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {
                path: 'case-study/:id',
                component: CaseStudyComponent
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            {
                path: 'projects',
                component: ProjectsComponent
            }
        ])
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        BannerComponent,
        AuthorsComponent,
        WhatwedoComponent,
        WorksComponent,
        ClientsComponent,
        ContactComponent,
        FooterComponent,
        CaseStudyComponent,
        HomeComponent,
        ProjectsComponent,

        TestimonialPipe
    ],
    providers: [ ProjectService ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}