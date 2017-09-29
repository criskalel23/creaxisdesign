import { Component, ViewEncapsulation } from '@angular/core';

//import { HeaderComponent } from './header.component';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    //images
    //private brand = require('../assets/images/brand.svg');
    creaxis_icon = require('../assets/images/creaxis-icon.svg'); 

    greet = 'Welcome to Creaxis';
}

