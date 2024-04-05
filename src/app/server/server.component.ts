import { Component } from '@angular/core';

@Component({
    selector: 'server-component', // selecting by attribute
    templateUrl: './server.component.html',
    styleUrl: './server.component.css'
})

export class ServerComponent {
    disableToAddServer = true;

    constructor() {
        setTimeout(() => {
            this.disableToAddServer = false;
        }, 2000)
    }
    serverId: number = 2;
    serverStatus: string = 'running';
    getServerStatus() {
        return this.serverStatus;
    }
}