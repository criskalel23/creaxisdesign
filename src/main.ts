import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';

import './layout';
import './assets/scss/layout.scss';
//import './assets/js/gmap';
//import './assets/js/svg-animation.js';

if(process.env.ENV === 'production') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);