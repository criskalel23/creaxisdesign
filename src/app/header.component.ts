import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
var $ = require('jquery');

@Component ({
    selector: 'crx-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    brand_inverse = require('../assets/images/brand-reverse.svg');
    brand_silver = require('../assets/images/brand-silver.svg');
    
    private fragment: string;

    constructor( private router: Router) {
        router.events.subscribe( s => {
            if( s instanceof NavigationEnd ) {
                const nav = router.parseUrl(router.url);
                //console.log(nav);
                if(nav.fragment) {
                    const element = document.querySelector('#' + nav.fragment);                    
                    
                    let id = element.id;
                    //console.log(id);

                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        })
    } // constructor end

    ngOnInit() {
        let $lem = $('.nav-item-a');
        //console.log($lem);
    }
}