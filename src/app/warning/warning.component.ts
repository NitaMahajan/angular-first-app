import { Component } from '@angular/core';

@Component({
    selector: 'warning-message',
    templateUrl: './warning.component.html',
    styles: [`
        .warning-message {
            font-size: '36px';
            color: red;
            background-color: darksalmon;
        }
    `]
})

export class WarningComponent {}