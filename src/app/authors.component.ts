import { Component } from '@angular/core';

@Component({
    selector: 'crx-authors',
    templateUrl: './authors.component.html',
    styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent {
    authors = require('../assets/images/authors.jpg');
    creaxis_icon = require('../assets/images/creaxis-icon.svg'); 
}