import { Component } from '@angular/core';

import { CLIENTS } from './clients-list';

    
@Component({
    selector: 'crx-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
    clients = CLIENTS;
    creaxis_icon = require('../assets/images/creaxis-icon.svg'); 
}